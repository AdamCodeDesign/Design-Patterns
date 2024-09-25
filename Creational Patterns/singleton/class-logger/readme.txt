 /*
        Singleton pattern - połaczenie  zbazą danych w ES6

        1. Napisz Singleton jako klasę ES6  który przechowa wiadomości 
           w tablicy messages oraz udostępnij metodę log(msg, 
           type = “normal”) która przyjmie dwa parametry: msg to 
           wiadomość natomiast type to typ wiadomości który wpłynie 
           na jej kolor w konsoli JavaScript. Wiadomości będą miały jeden 
           z czterech typów: normal czyli domyślny zwykły kolor wiadomości,
           warning to kolor żółty, error to kolor czerwony, a success 
           to jasnozielony.
        2. Metoda log(msg, type = "normal") zapisuje do tablicy messages 
           obiekt razem z wiadomością jako msg i jej typem który określa 
           kolor. 
        3. Pamiętaj aby w konstruktorze tego singletona sprawdzić 
           czy zwracasz zawsze tą jedną instancję  na bazie klasy Logger.
        4. Napisz metodę printMsg(msg)  która przyjmie obiekt 
           z wiadomością oraz typem wiadomości i następnie wewnątrz 
           za pomocą switcha sprawdź jaki to jest typ wiadomości 
           i jeżeli jest  to warning to wyświetl wiadomość w kolorze 
           żółtym w konsoli, jeśli error to w kolorze czerwonym, 
           jeśli sucess to w kolorze jasno zielonym. 
           Wykorzystaj poniższy kod który pokoloruje wiadomość 
           w konsoli chrome:
           console.log("%c" + msg.msg,”color: red”);
        5. Dodaj metodę showLogs() która wyświetli wszystkie wiadomości 
        z logera w konsoli i każdą wiadomość wyświetl za pomocą wcześniej 
          utworzonej metody printMsg(). Na koniec utwórz dwie instancje 
          na bazie tego Loggera i sprawdź czy w praktyce otrzymujesz 
          tą samą instancję singletona.  Wywołaj kilka razy metodę log() 
          z różnymi wiadomościami oraz typami wiadomości takimi jak “succes” 
          “warning” i “error”
          console.log("%c" + someText, "color: red");
        */ 