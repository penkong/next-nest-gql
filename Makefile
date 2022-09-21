composebuild:
	docker-compose -f docker-compose.yml up --build

up:
	docker-compose -f docker-compose.yml --compatibility up 

down:
	docker-compose -f docker-compose.yml down -v

buildapi:
	docker build -t penkong/nest-gql nest-gql

cleanall: 
	docker stop $$(docker ps -aq) && docker rm $$(docker ps -aq)