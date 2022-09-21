composebuild:
	docker-compose -f docker-compose.yml up --build

up:
	docker-compose -f docker-compose.yml --compatibility up 

down:
	docker-compose -f docker-compose.yml down -v

buildapi:
	docker build -t penkong/nest-gql nest-gql

# docker build -t <tag> --target production .
# To use it locally for development:
# docker run --rm -it --name <name> -p 3000:3000 -v ${PWD}:/app -w /app <tag>
buildweb:
	docker build -t penkong/nextjs-gql --target development nextjs

cleanall: 
	docker stop $$(docker ps -aq) && docker rm $$(docker ps -aq)