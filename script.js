//Création des variables
var analogies;
var quoi
var texte;
var content;
var explication;
var numinput;
var maxinput
var formulairestatus
var email
var messageformulaire
//Initialisation des variables notamment celles responsables de l'insertion de texte et d'image en fonction de numimput
messageformulaire = ''
email = ''
formulairestatus = false
analogies = ["", "un manga", "un oeuf", "un film d'action", "un film de super-héro", "une série humoristique", "un jeu-vidéo", "un objet"]
quoi = ["", "Chainsaw Man", "mollet", "Fist of Fury", "Spider-Man 2", "It's Always Sunny in Philadelphia", "Apex Legends", "des écouteurs"]
explication = ["", "le héro ne perd jamais ses objectifs de vue", "c'est le réconfort d'un oeuf à la coque avec le côté pratique d'un oeuf dur", "c'est mon film préféré de Bruce <br> Lee, le meilleur acteur de film d'arts martiaux", "Peter Parker finit toujours par se relever malgré les difficultés qu'il rencontre", "le visionnage de cette série ne nécessite pas plus de 3 de QI", "c'est le jeu-vidéo qui me donne le plus d'adrénaline", "cela permet de se relaxer comme de se concentrer pour travailler"]
src = ['', 'src="media/Chainsaw-Man-Wallpaper-5ew.jpg" alt=""', "src='media/10608128114_65aab19258_h ew.jpg'", "src='media/Thechineseconnection.jpg'", 'src="media/spider-man-2ew.jpg"', "src='media/3Vlr4QI-modified.gif'", "src='media/fahx-pv-apex-legends-season-6-4k-wallpaper2lag ew.jpg'", "src='media/nothingearew.jpg'"]
numinput = 0
maxinput = 7

//Fonction insertion dépendant de numimput compteur de chaîne
function Insertion() {
    document.querySelector(".content").innerHTML = '<img class="resized" style="opacity:9" src="media/altnoisemodified.gif">'
    setTimeout(function () {
        texte = "<p class='texte'>" + "Si j'étais  " + '<span class="important">' + analogies[numinput] + "</span>" + "<br> je serais " + '<span class=important>' + quoi[numinput] + "</span>" + "<br>parce que " + '<span class="important">' + explication[numinput] + "</span>" + "</p>" + "<p class='channel'>" + numinput + "</p>"
        document.querySelector(".écran").innerHTML = (texte)
        visual = "<img class='resized' " + src[numinput] + ">"
        document.querySelector(".content").innerHTML = (visual)
    }, 90);
}
//Fonctions d'enroulement et de déroulement du footer
function enroulement(){document.querySelector('footer ul').animate([
    {"height": "16vw"},
    {"height": "13vw"},
    {"height": "10vw"},
    {"height": "5vw"},
    {"height": "2vw"},
    {"height": "0vh"}], { duration: 300 })
setTimeout(function(){ document.querySelector('footer ul').classList.replace('visible', 'invisible')},300)
}
function déroulement(){
    document.querySelector('footer ul').animate([{
        "height": "16vw"
    }], { duration: 300 })
    setTimeout(function(){ document.querySelector('footer ul').classList.replace('invisible', 'visible')},300)
   
}

//Changement effectuer sur la page après chargement
document.addEventListener("DOMContentLoaded", function plus() {
    document.querySelector(".content").innerHTML = '<img class="resized" style="opacity:0.85" src="media/altnoisemodified.gif"> '
    document.querySelector('.écran').innerHTML = ''

    console.log('wassup');
    document.body.style.zoom = "100%"
    //Changement de chaîne par la fonction insertion lors d'un clic sur le bouton +/rouge
    document.querySelector('.right').addEventListener('click', function () {


        if (numinput < maxinput && numinput > -1) {
            numinput = numinput + 1
            //Insertion
            Insertion(numinput)
        }
        else {
            numinput = 0
            if (formulairestatus == true) {
                Insertion(numinput)
            }
            else if (formulairestatus == false) {
                document.querySelector(".content").innerHTML = '<img class="resized" style="opacity:0.85" src="media/altnoisemodified.gif"> '
                document.querySelector('.écran').innerHTML = "<p class='channel'>" + numinput + "</p>"
            }

        }
        console.log(numinput);
    })
    //Changement de chaîne par la fonction insertion lors d'un clic sur le bouton -/cyan
    document.querySelector('.left').addEventListener('click', function moins() {
        if (numinput > 1) {
            numinput = numinput - 1
            //Insertion
            Insertion(numinput);
        }
        else if (numinput == 1) {
            numinput = numinput - 1
            if (formulairestatus == true) {
                Insertion(numinput)
            }
            else if (formulairestatus == false) {
                document.querySelector(".content").innerHTML = '<img class="resized" style="opacity:0.85" src="media/altnoisemodified.gif"> '
                document.querySelector('.écran').innerHTML = "<p class='channel'>" + numinput + "</p>"
            }
        }
        else {
            numinput = maxinput
            document.querySelector(".content").innerHTML = '<img class="resized" style="opacity:0.85" src="media/altnoisemodified.gif">'
            setTimeout(function () {
                Insertion(numinput)
            }, 90);
        }
        console.log(numinput);
    })
    //Affichage du menu lorsque l'utilisateur click sur le bouton gris du milieu/menu
    document.querySelector('.menu').addEventListener('click', function menu() {
        numinput = -1
        document.querySelector(".content").innerHTML = '<img class="resized" style="opacity:0.85" src="media/altnoisemodified.gif">'
        setTimeout(function () {
            document.querySelector('.content').innerHTML = ('')
            document.querySelector('.écran').innerHTML = "<ul><p>Menu</p><li id='Formulaire'>Suggestion et customisation de 0</li><li>⚠Mentions légales⚠</li> <li>Chaîne n°0</li> <li>Chaîne n°1</li> <li>Chaîne n°2</li> <li>Chaîne n°3</li> <li>Chaîne n°4</li> <li>Chaîne n°5</li> <li>Chaîne n°6</li> <li>Chaîne n°7</li></ul>"
        }, 90);
        //le timeout permet de faire fonctionner les eventlistener sans problème
        setTimeout(function () {

            //Bouton mentions légales
document.querySelector('.écran li:nth-of-type(2)').addEventListener('click', function(){
    if(document.querySelector('footer ul').className=='invisible'){
        déroulement()
    }
    else{ enroulement()}
})
            //Sommaire des chaînes
                document.querySelector('.écran li:nth-of-type(3)').addEventListener('click', function(){
                    numinput=0
                    Insertion(numinput)
                })
                document.querySelector('.écran li:nth-of-type(4)').addEventListener('click', function(){
                    numinput=1
                    Insertion(numinput)
                })
                document.querySelector('.écran li:nth-of-type(5)').addEventListener('click', function(){
                    numinput=2
                    Insertion(numinput)
                })
                document.querySelector('.écran li:nth-of-type(6)').addEventListener('click', function(){
                    numinput=3
                    Insertion(numinput)
                })
                document.querySelector('.écran li:nth-of-type(7)').addEventListener('click', function(){
                    numinput=4
                    Insertion(numinput)
                })
                document.querySelector('.écran li:nth-of-type(8)').addEventListener('click', function(){
                    numinput=5
                    Insertion(numinput)
                })
                document.querySelector('.écran li:nth-of-type(9)').addEventListener('click', function(){
                    numinput=6
                    Insertion(numinput)
                })
                document.querySelector('.écran li:nth-of-type(10)').addEventListener('click', function(){
                    numinput=7
                    Insertion(numinput)
                })
            //Mise en place du formulaire et récupération des données
            document.querySelector('.écran li:first-of-type').addEventListener('click', function formulaire() {
                document.querySelector('.écran').innerHTML = "<fieldset><p>⚠Lire les mentions légales avant de remplir⚠</p> <label for='Sijétaisun'>Si j'étais un</label><br><input type='text' name='Sijétaisun' id='Sijétaisun' value='" + analogies[0] + "' maxlength='25'><br><label for='Jeserais'>Je serais </label> <br><input type='text' name='Jeserais' id='Jeserais' value='" + quoi[0] + "'maxlength='25'><br><label for='Parceque'>Parce que </label><br><input type='text' name='Parceque' id='Parceque' value='" + explication[0] + "' maxlength='75'><br> <label for='Source'>Lien vers image</label> <br><input type='text' name='Source' id='Source'><input type='button' value='Envoyer'><br><label for='email'>Email</label><br><input type='email' id='email' value='" + email + "'>" + "<br><label for='texte'>Message</label><br><input type='text' value='" + messageformulaire + "'id='texte'></fieldset>";
                document.querySelector('#Sijétaisun').addEventListener('keyup', function () {
                    console.log("Si j'étais", analogies[0] = document.querySelector('#Sijétaisun').value)
                })
                document.querySelector('#Jeserais').addEventListener('keyup', function () {
                    quoi[0] = document.querySelector('#Jeserais').value
                })
                document.querySelector('#Parceque').addEventListener('keyup', function () {
                    explication[0] = document.querySelector('#Parceque').value
                })
                document.querySelector('#Source').addEventListener('keyup', function () {
                    src[0] = 'src="' + document.querySelector('#Source').value + '"'
                })
                document.querySelector('#email').addEventListener('keyup', function () {
                     email = document.querySelector('#email').value
                })
                document.querySelector('#texte').addEventListener('keyup', function () {
                    messageformulaire = document.querySelector('#texte').value
                })
                document.querySelector('[type="button"]').addEventListener('click', function () {
                    //Formulaire= true permet d'activer la fonction insertion lorsque numimput=0
                    formulairestatus = true;
                    message = 'https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=gambette&courriel=' + email + '&message=' + 'analogies:' + analogies[0] + "je serais" + quoi[0] + 'explication:' + explication[0] + 'source:' + document.querySelector('#Source').value + 'texte:' + messageformulaire
                    fetch(message).then(function (response) {
                        response.json().then(function (data) {
                            console.log("Réponse reçue : ");
                            console.log(data);
                        })
                    })

                })
            });
        },  100)
        
    }


    )
        document.querySelector('footer h2').addEventListener('click', function(){
            if(document.querySelector('footer ul').className=='invisible'){
                déroulement()
            }
            else{ enroulement()}
        })
})
