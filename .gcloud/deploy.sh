banner()
{
  echo "+------------------------------------------+"
  printf "| %-40s |\n" "`date`"
  echo "|                                          |"
  printf "| %-40s |\n" "$1"
  echo "+------------------------------------------+"
}

banner "Stop all running services."
docker-compose down

banner "Pull all latest docker images."
docker-compose pull --quiet

banner "Prune all unused docker images."
docker image prune --force

banner "Start all services."
docker-compose up --detach --no-build

banner "Deploy successfully!!!"

