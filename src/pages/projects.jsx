import React, { useState, useContext } from "react";
import Bubble from "../components/Bubble";
import { LanguageContext } from "./root";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Projects = () => {
  const [hidden, setHidden] = useState(false);
  const [detail, setDetail] = useState(false);

  const { czech } = useContext(LanguageContext);

  const back = () => {
    setDetail(false);
    setHidden(false);
  };

  return (
    <div className="mt-10 flex flex-col justify-center items-center">
      <Bubble
        width="md:min-w-[40rem] min-w-[25rem]"
        height="min-h-[5rem]"
        introBubble
        title={czech ? "Moje projekty" : "My projects"}
      />
      {!detail && (
        <Link to="/">
          <div className="mt-20 flex items-center [&>*]:mx-2 bg-black/50 p-2 shadow-md shadow-blue-400">
            <p>Intro</p>
            <FaArrowCircleLeft />
          </div>
        </Link>
      )}
      {detail ? (
        <Bubble
          title={detail?.title}
          tech={detail?.tech}
          description={detail?.description}
          descriptionGB={detail?.descriptionGB}
          back={back}
          functionality
        />
      ) : (
        <div
          className={`mt-10 w-4/5 grid grid-cols-1 md:grid-cols-2 gap-5 min-h-[50rem] justify-items-center items-center ${
            hidden && "!grid-cols-1"
          }`}>
          <Bubble
            title="Voyapp"
            content={
              czech
                ? "Můj originální nápad a zatím zdaleka nejpokročilejší aplikace."
                : "My original project idea and by far the most advanced app yet."
            }
            hiddenStatus={hidden}
            clickTheBubble={() => setHidden(!hidden)}
            getDetail={(e) => setDetail(e)}
            tech="React/Vite.js, TailwindCSS, Leaflet, Express.js, Prisma, postgreSQL database"
            description={
              <>
                <p>
                  Tato aplikace je něco jako mix mezi cestovatelskou seznamkou a ubytovací aplikací
                  typu Airbnb.
                </p>
                <p>
                  Sekce 'Profile' je přístupná pouze pro přihlášené uživatele, tzn. je nutné
                  vytvořit si účet v sekci 'Auth'. Zde je možné vytvořit nový cestovatelský inzerát,
                  nebo ubytování, stejně jako zobrazit si veškerá svoje data tj. vlastní
                  cestovatelské inzeráty/ubytování a také rezervace, v této sekci se vše dá buď
                  upravit nebo smazat.{" "}
                </p>
                <p>
                  {" "}
                  Pokud si někdo vytvoří rezervaci u jakéhokoliv vašeho inzerátu, nebo ji zruší,
                  bude vám v profilu blikat upozornění, dokud na něj nekliknete, čímž potvrdíte jeho
                  přečtení a pak zmizí. V sekci 'Destinations' vidíte všechny dostupné cestovatelské
                  inzeráty. Pokud jste přihlášeni, můžete na ně reagovat ('lajkovat', 'dislajkovat',
                  komentovat příspěvek, nebo pokud jsou volná místa, tak si udělat rezervaci).
                </p>
                <p>
                  V případě velkého množství dat jsem přidal také filtr, jednotlivé inzeráty se dají
                  filtrovat podle názvu, inzerující osoby, popularity ('lajky' - 'dislajky') a také
                  vzdálenosti. Výchozí vzdálenost je od vaší polohy, ale můžete si nastavit
                  libovolně po světě (např. hledáte někoho, kdo se chystá do jihovýchodní Asie, tak
                  si na mapě kliknete do Thajska a vyberete okruh 2000km). Sekce 'Accommodations' je
                  velmi podobná, liší se pouze tím, že místo 'lajků', 'dislajků' a komentářů má
                  recenze, a rezervace se musí vybrat na určité datum. Filtr je v této sekci skoro
                  stejný.
                </p>
                <p>
                  Poslední poznámka vhodná zmínky: na mapě se dynamicky ukazují polohy všech
                  cestovatelských inzerátů/ubytování - cestovatelské inzeráty žlutě a ubytování
                  fialově.
                </p>
              </>
            }
            descriptionGB={
              <>
                <p>
                  This app is something like a mixture between traveling app and accommodation
                  website similar to Airbnb.
                </p>
                <p>
                  Section 'Profile' is accessible only for registered users, meaning you need to
                  create an account in 'Auth' section. In your profile, you can create a new
                  traveling ad/accommodation, as well as view all of your data - own traveling
                  ads/accommodation and also your reservations, you can either edit or delete those.
                </p>
                <p>
                  If anyone creates/cancels their reservation at any of your posts, you'll get a
                  blinking notification until you click on it, confirming you've read it, then it
                  disappears. In 'Destinations' section, you can see all traveling ads. You can
                  react to it as long as you're logged in (like, dislike, comment post, or make a
                  reservation if there are enough spots left).
                </p>
                <p>
                  In case of bigger amount of data, I added a filter, all ads can be filtered by
                  name, post owner, popularity (likes - dislikes) and also distance. Default
                  distance is from your location, but you can set it anywhere in the world (eg.
                  you're looking for someone traveling to Southeast Asia, so you click on Thailand
                  and set distance to 2000km). Section 'Accommodation' is very similar, the only
                  difference is that it has reviews instead of likes, dislikes and comments and you
                  need to select a date range to make a reservation. Filter is almost the same in
                  this section.
                </p>
                <p>
                  Last info worth noting: you can dynamically see locations of all traveling
                  ads/accommodation on the map - traveling ads are yellow and accommodation is
                  purple.
                </p>
              </>
            }
            link="https://voyapp.jancesenek.dev"
          />
          <Bubble
            title="Chulak Bazaar"
            content={czech ? "Vlastní e-shop." : "Own e-shop."}
            hiddenStatus={hidden}
            clickTheBubble={() => setHidden(!hidden)}
            getDetail={(e) => setDetail(e)}
            tech="React/Vite.js, TailwindCSS, Express.js, Prisma, postgreSQL database"
            description={
              <>
                <p>Tato aplikace je něco jako e-shop bez platební brány.</p>
                <p>
                  V sekci 'Items' je vidět jednotlivé zboží buď na prodej, nebo k vydražení v aukci.
                  Zboží na prodej může mít libovolný počet kusů. Pokud chcete koupit jakékoliv
                  zboží, musíte být přihlášeni, tzn. musíte si vytvořit účet v sekci 'Auth'.
                  Samozřejmě musíte mít na účtě dostatek financí (každý uživatel začíná s 100000
                  fiktivními mincemi). Pokud úspěšně koupíte/prodáte zboží nebo vás někdo v aukcí
                  přehodí, dostanete zprávu od systému s veškerými informacemi.
                </p>
                <p>
                  V sekci 'Users' máte možnost zobrazit si svůj profil, pokud jste přihlášeni, kde
                  máte možnost přidat/upravit/doplnit zboží, nebo také prodat zboží v aukci, pokud
                  na něj už někdo přihodil. Z profilu se dá také navigovat na seznam všech uživatelů
                  a je možné si také zobrazit cizí profily. Jména všech uživatelů jsou barevně
                  označena podle jejich recenzí od červené (nejhorší recenze) až po zelenou
                  (nejlepší recenze). Bílá barva znamená, že uživatel ještě žádné recenze nemá. Na
                  cizím profilu je možné pouze napsat danému uživateli recenzi, pokud od vás žádnou
                  ještě nemá.
                </p>
                <p>
                  V sekci 'Messages' je možné psát všem uživatelům. Je zde také speciální konverzace
                  nazvaná 'System', zde dostáváte veškeré systémové oznámení o vašich transakcích.
                  Pokud vás jakýkoliv uživatel v soukromých zprávách obtěžuje, je možné chat
                  'zmrazit', čímž znemožníte posílání zpráv mezi vámi dvěma, dokud ho opět
                  neobnovíte.
                </p>
              </>
            }
            descriptionGB={
              <>
                <p>This app is something like an e-shop without payment gateway.</p>
                <p>
                  In section 'Items', you can view particular items for sale/auction. Items for sale
                  can have unlimited pieces. If you wanna buy any items, you need to be logged in -
                  create an account in 'Auth' section. You obviously also need to have enough money
                  on your account (every user starts with 100000 fictional coins). If you
                  successfully buy/sell any item, or someone outbids you in an auction, you'll get a
                  system message with all information.
                </p>
                <p>
                  In 'Users' section, you can view your profile, if you're logged in, you can
                  add/edit/replenish your items, or sell your items in an auction, if there's any
                  bid. You can also navigate to a list of all users and view other profiles. Names
                  of all users are colored by their reviews from red (worst reviews) to green (best
                  reviews). White color means the user doesn't have any reviews yet. You can make a
                  review for other users on their profiles as long as they don't have any from you
                  yet.
                </p>
                <p>
                  In 'Messages' section, you can text any user. There is also a special conversation
                  called 'System' where you receive all system info about your transactions. If any
                  user bothers you in DMs, you can freeze the chat disallowing any communication
                  between the two of you until you unfreeze it.
                </p>
              </>
            }
            link="https://chulakbazaar.jancesenek.dev"
          />
          <Bubble
            title="Wormhole Media"
            content={czech ? "Vlastní sociální síť." : "My own social media."}
            hiddenStatus={hidden}
            clickTheBubble={() => setHidden(!hidden)}
            getDetail={(e) => setDetail(e)}
            tech="React/Vite.js, TailwindCSS, Express.js, Prisma, postgreSQL database"
            description={
              <>
                <p>Vlastní sociální síť, která funguje jako zjednodušená verze např. Facebooku.</p>
                <p>
                  Je nutné vytvořit si vlastní účet, aby vás aplikace pustila dál. Po zaregistrování
                  vás aplikace přesměruje na váš profil (Profile), kde vidíte svoje informace (máte
                  možnost změnit část svých údajů - svoji profilovou fotku, zaměstnání a
                  planetu/zemi původu) a svoje příspěvky, které se na profilu dají vytvořit, upravit
                  nebo smazat. Zde vidíte také nevyřízené žádosti o přátelství, dokud máte
                  nevyřízené žádosti, v menu v sekci Profile bude blikat upozornění.
                </p>
                <p>
                  Dále sekce News Feed, kde vidíte příspěvky všech uživatelů na síti kromě těch,
                  které si buď zablokujete, nebo kteří si zablokují vás. Tyto příspěvky lze
                  'lajkovat/dislajkovat' nebo komentovat.
                </p>
                <p>
                  V sekci Users vidíte seznam všech uživatelů na síti, zde je možnost vyhledat
                  uživatele podle jména, v případě, že by se sociální síť rozrostla. Uživatelé se
                  zobrazují barevně podle toho, jaký s nimi máte vztah (bílá - žádný, žlutá -
                  přátelé, šedá - vy jste si zablokovali daného uživatele, průhledná s červenou
                  ikonou, cursor: not-allowed - daný uživatel si zablokoval vás, nebo se jedná o
                  admina, který není ve vašem seznamu přátel). Po kliknutí na uživatele se vám
                  zobrazí jeho profil a všechny jeho příspěvky. Zde máte možnost poslat žádost o
                  přátelství/odstranit ze seznamu přátel, nebo si daného uživatele zablokovat.
                </p>
                <p>
                  V sekci Messages vidíte seznam všech uživatelů, s kterými si můžete psát. Máte
                  povoleno psát pouze sobě nebo svým přátelům. Dokud máte nepřečtené zprávy, bude
                  vám v menu v sekci Messages blikat upozornění, které se zobrazí i u ikon vašich
                  konverzací s přáteli, od kterých máte nepřečtené zprávy. U všech
                  příspěvků/komentářů/soukromých zpráv je kromě textu možnost nahrát i obrázkové
                  soubory.
                </p>
              </>
            }
            descriptionGB={
              <>
                <p>Own social media, which works as a simplified version of eg. Facebook.</p>
                <p>
                  It's necessary to create your own account to be let in. After signing up, app
                  redirects you to your profile, where you can see your info (you can edit some of
                  your data - profile picture, occupation, planet/country of origin) and your own
                  posts, which can be created/updated or deleted on the profile. In this section,
                  you also see any unhandled friend requests, as long as you have any, you'll see a
                  blinking circle in the menu.
                </p>
                <p>
                  In 'News Feed' section, you see posts of all social media users except those
                  who've blocked you, or whom you blocked. You can like/dislike/comment those posts.
                </p>
                <p>
                  In 'Users' section, you see a list of all users on social media, it's possible to
                  filter them by name in case the social media grows. Users appear colored according
                  to your relationship with them (white - none, yellow - friends, grey - you blocked
                  the user, transparent with red icon, cursor: not-allowed - user has either blocked
                  you, or it's an admin not in your friendlist). After clicking on a user, you can
                  see his profile with all of his posts. You can send friend request/remove a user
                  from friends, or block/unblock a user.
                </p>
                <p>
                  In 'Messages' section, you can see a list of all users you can text. You are
                  allowed to text yourself or your friends. If you have unread messages, you'll have
                  a notification in 'Messages' menu, which also appears on icons your conversations
                  with friends, where you have unread messages. You can also upload image files in
                  all posts, comments and DMs.
                </p>
              </>
            }
            link="https://wormholemedia.jancesenek.dev"
          />
          <Bubble
            title={czech ? "Člověče, nezlob se!" : "Man, don't get angry!"}
            content={
              czech
                ? "Desková hra, kterou asi všichni znají. Pravidla se dají najít online, ačkoliv hra má více variant. V této variantě se hráč musí rozhodnout, jestli bude hrát s nasazenou figurkou, nebo si nasadí novou figurku, předtím, než hodí kostkou."
                : "Board game, rules can be looked up online, although there are different variants. In this one, player has to choose if he wants to move with an active piece or ad a new one before rolling the dice."
            }
            hiddenStatus={hidden}
            clickTheBubble={() => setHidden(!hidden)}
            link="https://clobrdo.jancesenek.dev"
          />
        </div>
      )}
    </div>
  );
};

export default Projects;
