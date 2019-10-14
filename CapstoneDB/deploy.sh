dotnet publish -c Release 

cp dockerfile ./bin/release/netcoreapp2.2/publish

docker build -t oso-website-image ./bin/release/netcoreapp2.2/publish

docker tag oso-website-image registry.heroku.com/oso-website/web

docker push registry.heroku.com/oso-website/web

heroku container:release web -a oso-website

# sudo chmod 755 deploy.sh
# ./deploy.sh