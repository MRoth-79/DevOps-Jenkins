Nexus Installation Guide - Ubuntu 

Log in as the root user

Install OpenJDK 17 on Ubuntu
sudo apt update
sudo apt install openjdk-17-jdk -y
java -version
cd /opt
Start the Download of the Nexus
sudo wget https://download.sonatype.com/nexus/3/latest-unix.tar.gz
Once the download is complete, extract the tarball:
sudo tar -xvzf latest-unix.tar.gz
Rename the extracted Nexus setup folder to nexus:
sudo mv /opt/nexus-3.73.0-12 /opt/nexus
As security practice, not to run nexus service using root user, so lets create new user named nexus to run nexus service:
sudo adduser nexus
To set no password for nexus user open the visudo file in ubuntu:
sudo visudo
Add below line into it , save and exit:
nexus ALL=(ALL) NOPASSWD: ALL
Give permission to nexus files and nexus directory to nexus user:
sudo chown -R nexus:nexus /opt/nexus
sudo chown -R nexus:nexus /opt/sonatype-work
To run nexus as service at boot time, open /opt/nexus/bin/nexus.rc file, uncomment it and add nexus user as shown below:
sudo nano /opt/nexus/bin/nexus.rc
uncomment and add:
run_as_user="nexus"
Open the /opt/nexus/bin/nexus.vmoptions file:
sudo nano /opt/nexus/bin/nexus.vmoptions
To Increase the nexus JVM heap size, you can modify the size as shown below:
-XX:MaxDirectMemorySize=2703m
-Djava.net.preferIPv4Stack=true


To run nexus as service using Systemd:
sudo nano /etc/systemd/system/nexus.service
insert the below content:
[Unit]
Description=nexus service
After=network.target


[Service]
Type=forking
LimitNOFILE=65536
ExecStart=/opt/nexus/bin/nexus start
ExecStop=/opt/nexus/bin/nexus stop
User=nexus
Restart=on-abort


[Install]
WantedBy=multi-user.target
Start Nexus:
sudo systemctl start nexus
Enable Nexus service at system startup:
sudo systemctl enable nexus
check nexus service status:
sudo systemctl status nexus
To access Nexus repository web interface , open your browser.
if you are running UFW firewall on Ubuntu, open the firewall port 8081 using below command:
ufw allow 8081/tcp
Use the below command to open to access Nexus repository web interface:
http://server_IP:8081
To login to Nexus, click on Sign In, default username is admin
To find default password run the below command:
sudo nano /opt/sonatype-work/nexus3/admin.password
configure Anonymous Access:


click on Finish:

