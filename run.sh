#!/bin/bash

# Nama file: restart.sh
# Deskripsi: Restart Docker Compose hanya jika container sudah berjalan

# Cek apakah ada service yang aktif
running_services=$(docker compose ps -q)

if [ -n "$running_services" ]; then
  echo "Stopping running Docker Compose services..."
  docker compose down
else
  echo "No running Docker Compose services to stop."
fi

echo "Starting Docker Compose services..."
docker compose up -d

echo "Docker Compose restarted successfully."
