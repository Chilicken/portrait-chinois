- Installer XAMPP
- Placer le dossier contenant le site et ses contenues dans "C:\xampp\htdocs\”
- Possibilité de créer un alias au site en modifiant ”C:\xampp\apache\conf\httpd.conf” après <IfModule alias\_module> ajouter la ligne suivante :

Alias "/[alias]"  "[chemin vers dossier site]"

- Lancer le serveur Apache depuis l’interface XAMPP
- Accéder au site par l’arborescence par l’adresse http://localhost  ou en saisissant l’adresse ipv4, puis en cliquant sur le dossier

Ou par http://localhost/[Portrait-chinois-RTvT] ou http://localhost/[Alias].
