# Manueal configurar github por ssh

## Datos básicos antes de empezar
***(se obviedece que has inicializado el repostitorio) usando git init***
-Tener instalado git/gitbash 
  *Búscalo en la barra de busqueda de windows *
-Tener una cuenta de github
-Tener tu **correo** y **cuenta** de github vinculado con gitbash o viceversa, usa:
```bash
 git config --list
```
![gitconfig](/img/imagen%20git%20config.png)
Para observar cual es el correo, usuario y rama default  
**Si necestitas configurarlo usa:**
```bash
git config --global user.email "tucorreo@electronico.com"
git config --global user.name "Tunombre"
git config --global init.defaultBranch main
```

## Instalación de la clave de github

1-Usa el comando 
```bash 
    ls -la ~/.ssh/
```
![ls de .shh](/img/imagen%20carpeta%20.ssh.png)

2-para comprobar si tienes una clave ssh si tienes, aparecerá una y otra con .pub (.pub significa que es la ***clave pública***)

2-Si no tienes clave usa 
```bash 
ssh-keygen -t ed25519 -C "tucorreodegithub@gamil.com"
``` 
para generarlas

3-Vas a github click en perfil derecho superior , click a configuracion , click a ssh and gpg keys **PONER LA PUBLICA *.pub* no la privada**

(***accedemos a la key ssh.pub con el explorador o por bash usando nano, cat o lo que te resulte más sencillo y la copiamos para pegarla posteriormente***)

![perfil de github](/img/foto%20the%20github.png)

![imagen menu key](/img/imagen%20key%20ssh1.png)

![imagen menu key 2](/img/imagen%20key%20ssh2.png)



## añadir clave agent

1- Si usamos **windows-11** entonces tenemos que prender **powershell** ejecutandolo como **administrador**

2-Iniciamos el servicio ssh-agent y lo lo ponemos en automatico

```bash
Get-Service ssh-agent | Set-Service -StartupType Automatic 
```

3-Start-Service ssh-agent para empezarlo , si no dice nada , todo bien

4- **añadimos clave agent**
```bash 
ssh-add C:\Users\samue\.ssh\id_ed25519
```

![imagen menu key 2](/img/imagenpowershell1.png)


## verificar la clave

1-**verificamos usando** 
```bash 
ssh -T git@github.com
``` 

2-respondemos **yes** y pulsamos enter 3 veces

![imagen menu key 2](/img/imagenpowershell2.png)