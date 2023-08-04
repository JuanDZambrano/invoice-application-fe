up:
		docker-compose up -d
		sleep 1
		docker-compose ps

down:
		docker-compose down

logs: 
		docker-compose logs -f
