# Docker learnings

## The WHY

Debootstrap is what Debian uses to bootstrap, is great for making a rooted of dir

Change root - un-sharing a file system
Change namespaces - un-sharing capabilities using unshare commands

Control groups (cgroups, cgroup-tools) - invited by google, limit resources for processes on a machine

htop (see what resources the machine has)

yes | tr \\n x | head -c 1048576000 | grep n (use all ram)
yes > /dev/null (use all CPU)

## Docker

- docker hub has all the containers
- docker run -it alpine:3.10 (run an image)
- docker run -it —detatch … (run in the background)
- docker attatch NAME, attach to running
- docker kill CONTAINER
- docker ps (processes)
- docker run … —name gareth-rocks (name the container)
- docker rm NAME remove the container
- docker run —name TAKENNAME —rm TAKENNAME (remove prev one and make new one with same name)
- docker run -it node-12/stretch bash (the bash will put you in bash and not the node repl)

### Docker tags

- everything after the : on the image name node (latest) node:12 (node 12 only)

### Some helpfull commands

- docker inspect NAME (env vars, command it will run and so on etc)
- docker pause / unpause
- docker exec, run something on an EXISTING container
- docker history NAME:TAG (like git log)
- docker info (about host computer)
- docker top NAME (see all processes going on in a container)
- docker ps —all (list all containers even not running)
- docker logs NAME (logs from the container)
- docker rm NAME remove container
- docker rmi NAME remove image and container
- docker container prune (remove all stopped containers)
- docker image prune (WILL REMOVE ALL IMAGES)
- docker image ls (list all images)
- docker restart NAME
- docker search NAME (searches on docker hub)

### Docker files

- docker build LOCATION_OF_DOCKER_FILE (will build the docker container from the file you make)
- docker build —tag NAME FILE (gives us a nice name)

### Killing a process which does not die

some things like node might not handle the sig term event in the node script so you
can run docker like

- docker run --init --rm NAME so it will let you kill it and it will remove also (if you are lazy)

or even better add tiny to your docker file so you do not do this mistake on prod or something

### Port mapping so you can see localhost

you need to tell docker you would like for example to map one of its ports to the outside
like so

- docker run --publish 3000:3000 NAME

### Bind mounts

This command will

- allow docker to take your files where you are
- bind them to a directory in the container
- expose to 8080 the docker port 80 (nginx)
- run that on the nginx container ....
- when you make changes on the host machine to say the web files in this case they will be reflected on the docker container also

`docker run --mount type=bind,source="$(pwd)"/build,target=/usr/share/nginx/html -p 8080:80 nginx:stable`

But this is not such a great idea for production obv as you cannot just throw this about like you can the standard containers
