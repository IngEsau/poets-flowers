#!/usr/bin/env bash
set -euo pipefail

project_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
mode="${1:-deploy}"

if [[ "$mode" != "deploy" && "$mode" != "--build-only" ]] || (( $# > 1 )); then
  printf 'Uso: %s [--build-only]\n' "$0" >&2
  exit 2
fi

if [[ "$mode" == "deploy" ]]; then
  if [[ ! -f "$project_dir/.env" ]]; then
    printf 'Falta .env. Copia .env.example a .env y completa FTP_PASSWORD.\n' >&2
    exit 1
  fi

  # El archivo .env es local y no se versiona.
  # shellcheck source=/dev/null
  source "$project_dir/.env"

  for variable in FTP_HOST FTP_PORT FTP_USER FTP_PASSWORD FTP_REMOTE_DIR; do
    if [[ -z "${!variable:-}" ]]; then
      printf 'Falta %s en .env; se cancela el deploy.\n' "$variable" >&2
      exit 1
    fi
  done

  if [[ ! "$FTP_HOST" =~ ^[A-Za-z0-9.-]+$ ||
        ! "$FTP_PORT" =~ ^[0-9]+$ ||
        ! "$FTP_USER" =~ ^[A-Za-z0-9@._+-]+$ ||
        ! "$FTP_REMOTE_DIR" =~ ^/[A-Za-z0-9._/-]+$ ]]; then
    printf 'Los datos de conexión en .env tienen un formato no válido.\n' >&2
    exit 1
  fi

  if ! command -v lftp >/dev/null 2>&1; then
    printf 'Se requiere lftp para publicar por FTPS explícito.\n' >&2
    exit 1
  fi
fi

cd "$project_dir"
npm ci
npm run build

if [[ ! -f "$project_dir/out/index.html" ]]; then
  printf 'La exportación estática no generó out/index.html.\n' >&2
  exit 1
fi

if [[ "$mode" == "--build-only" ]]; then
  printf 'Exportación estática lista en %s/out.\n' "$project_dir"
  exit 0
fi

printf 'Publicando out/ en %s por FTPS explícito...\n' "$FTP_HOST"
LFTP_PASSWORD="$FTP_PASSWORD" lftp --norc -f /dev/stdin <<EOF
set cmd:fail-exit yes
set ftp:ssl-force yes
set ftp:ssl-protect-data yes
set ssl:verify-certificate yes
set net:max-retries 2
set net:timeout 30
open --env-password --user "$FTP_USER" -p "$FTP_PORT" "ftp://$FTP_HOST"
cd "$FTP_REMOTE_DIR"
mirror --reverse --verbose --no-perms "$project_dir/out" .
bye
EOF

printf 'Publicación terminada.\n'
