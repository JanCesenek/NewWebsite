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
    <div className="my-10 flex flex-col justify-center items-center">
      <Bubble
        width="min-w-[25rem]"
        height="min-h-[5rem]"
        introBubble
        title={
          <div className="flex justify-around items-center [&>*]:mx-5">
            <img src="./imgs/flamebulb.svg" alt="logo" className="w-[2rem]" />
            <div>{czech ? "Moje projekty" : "My projects"}</div>
          </div>
        }
      />
      {!detail && (
        <Link to="/">
          <div className="mt-20 flex items-center [&>*]:mx-2 bg-black p-2 shadow-md shadow-orange-400 rounded-md">
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
          link={detail?.link}
          video={detail?.video}
        />
      ) : (
        <div
          className={`mt-10 w-4/5 grid grid-cols-1 md:grid-cols-2 gap-y-28 min-h-[50rem] justify-items-center items-center ${
            hidden && "!grid-cols-1"
          }`}>
          <Bubble
            title="Steelchefs"
            content={czech ? "E-shop s kuchyňskými potřebami." : "Kitchen equipment e-commerce."}
            hiddenStatus={hidden}
            clickTheBubble={() => setHidden(!hidden)}
            getDetail={(e) => setDetail(e)}
            tech="React/Vite.js, TailwindCSS, Leaflet, Express.js, Prisma, postgreSQL database, Stripe API, emailJS, Tiptap editor"
            description={
              <>
                <p className="text-[1.8rem] font-bold my-10">
                  Tato aplikace je velmi věrná kopie jakéhokoliv e-shopu, obsahuje veškerou
                  funkcionalitu.
                </p>
                <p className="my-5">
                  Sekce 'Intro' obsahuje základní popis, z hlediska funkcionality nic důležitého.
                </p>
                <p className="my-5">
                  V sekci 'Products' je možné vidět veškeré zboží, které je rozděleno do kategorií.
                  Zboží lze filtrovat podle názvu nebo kategorie. Po kliknutí na zboží se zobrazí
                  detailní informace, kde je možné zboží přidat do košíku. Přidávat/mazat/upravovat
                  zboží může pouze admin, tato funkcionalita není dostupná pro běžného uživatele.
                </p>
                <p className="my-5">
                  V sekci 'Blog' jsou zobrazeny články/recepty. To si může vyzkoušet i běžný
                  uživatel. Díky editoru Tiptap je možné psát články s různými formátovacími
                  možnostmi, jako je tučné písmo, kurzíva, odrážky, číslování, obrázky, videa, atd.
                  Běžný uživatel může přidávat nové články/recepty, stejně jako je upravovat nebo
                  mazat (pouze ty, které vytvořil sám).
                </p>
                <p className="my-5">
                  V sekci 'Reviews' lze přidávat recenze (pouze, pokud jste přihlášeni). Každý
                  uživatel může vytvořit pouze jednu recenzi.
                </p>
                <p className="my-5">
                  V sekci 'Auth' (symbol uživatele podle stavu přihlášení) se můžete přihlásit ke
                  svému účtu. Pokud jste přihlášeni, můžete zobrazit/upravit svoje údaje, nebo
                  zobrazit veškeré svoje objednávky. Vytvořené objednávky nelze nijak upravovat,
                  jakmile jsou v systému.
                </p>
                <p className="my-5">
                  V sekci 'Cart' (symbol nákupního košíku) můžete vidět rozpracovanou objednávku.
                  Automaticky jste sem přesměrováni, jakmile zadáte do košíku zboží. Pro vytvoření
                  objednávky je potřeba zadat dopravu a způsob platby. Pokud zvolíte platební bránu,
                  musíte zadat číslo "4242 4242 4242 4242", jakékoliv budoucí datum expirace a
                  libovolné PSČ. Tato platební brána je pouze v testovací verzi, pro zprovoznění
                  skutečných plateb je nutno poskytnout IČO a sídlo firmy.
                </p>
              </>
            }
            descriptionGB={
              <>
                <p className="text-[1.8rem] font-bold my-10">
                  This app is a very faithful copy of any e-commerce, containing all functionality.
                </p>
                <p className="my-5">
                  Section 'Intro' contains basic description, nothing important in terms of
                  functionality.
                </p>
                <p className="my-5">
                  In 'Products' section, you can see all items, divided into categories. Items can
                  be filtered by name or category. After clicking on an item, detailed information
                  is shown, where you can add it to the cart. Adding/deleting/updating items is only
                  available for admin, this functionality is not accessible for regular users.
                </p>
                <p className="my-5">
                  In 'Blog' section, articles/recipes are displayed. This can be tried by a regular
                  user. Thanks to Tiptap editor, it's possible to write articles with various
                  formatting options, such as bold, italic, bullet points, numbering, images,
                  videos, etc. Regular user can add new articles/recipes, as well as edit or delete
                  them (only those created by himself).
                </p>
                <p className="my-5">
                  In 'Reviews' section, reviews can be added (only if you're logged in). Each user
                  can create only one review.
                </p>
                <p className="my-5">
                  In 'Auth' section (user icon according to login status), you can log in to your
                  account. If you're logged in, you can view/edit your data, or view all your
                  orders. Created orders can't be edited in any way once they're in the system.
                </p>
                <p className="my-5">
                  In 'Cart' section (shopping cart icon), you can see a pending order. You're
                  automatically redirected here once you add items to the cart. To create an order,
                  you need to enter shipping and payment method. If you choose a payment gateway,
                  you need to enter "4242 4242 4242 4242", any future expiration date and any ZIP
                  code. This payment gateway is only in test version, to enable real payments, you
                  need to provide a company VAT and address.
                </p>
              </>
            }
            link="https://steelchefs.jancesenek.dev"
            project
            video="/videos/Steelchefs.mp4"
          />
          <Bubble
            title="Voyapp"
            content={
              czech
                ? "Cestovatelská seznamka/ubytovací aplikace."
                : "Traveling dating/accommodation app."
            }
            hiddenStatus={hidden}
            clickTheBubble={() => setHidden(!hidden)}
            getDetail={(e) => setDetail(e)}
            tech="React/Vite.js, TailwindCSS, Leaflet, Express.js, Prisma, postgreSQL database"
            description={
              <>
                <p className="text-[1.8rem] font-bold my-10">
                  Tato aplikace je něco jako mix mezi cestovatelskou seznamkou a ubytovací aplikací
                  typu Airbnb.
                </p>
                <p className="my-5">
                  Sekce 'Profile' je přístupná pouze pro přihlášené uživatele, tzn. je nutné
                  vytvořit si účet v sekci 'Auth'. Zde je možné vytvořit nový cestovatelský inzerát,
                  nebo ubytování, stejně jako zobrazit si veškerá svoje data tj. vlastní
                  cestovatelské inzeráty/ubytování a také rezervace, v této sekci se vše dá buď
                  upravit nebo smazat.{" "}
                </p>
                <p className="my-5">
                  {" "}
                  Pokud si někdo vytvoří rezervaci u jakéhokoliv vašeho inzerátu, nebo ji zruší,
                  bude vám v profilu blikat upozornění, dokud na něj nekliknete, čímž potvrdíte jeho
                  přečtení a pak zmizí. V sekci 'Destinations' vidíte všechny dostupné cestovatelské
                  inzeráty. Pokud jste přihlášeni, můžete na ně reagovat ('lajkovat', 'dislajkovat',
                  komentovat příspěvek, nebo pokud jsou volná místa, tak si udělat rezervaci).
                </p>
                <p className="my-5">
                  V případě velkého množství dat jsem přidal také filtr, jednotlivé inzeráty se dají
                  filtrovat podle názvu, inzerující osoby, popularity ('lajky' - 'dislajky') a také
                  vzdálenosti. Výchozí vzdálenost je od vaší polohy, ale můžete si nastavit
                  libovolně po světě (např. hledáte někoho, kdo se chystá do jihovýchodní Asie, tak
                  si na mapě kliknete do Thajska a vyberete okruh 2000km). Sekce 'Accommodations' je
                  velmi podobná, liší se pouze tím, že místo 'lajků', 'dislajků' a komentářů má
                  recenze, a rezervace se musí vybrat na určité datum. Filtr je v této sekci skoro
                  stejný.
                </p>
                <p className="my-5">
                  Poslední poznámka vhodná zmínky: na mapě se dynamicky ukazují polohy všech
                  cestovatelských inzerátů/ubytování - cestovatelské inzeráty žlutě a ubytování
                  fialově.
                </p>
              </>
            }
            descriptionGB={
              <>
                <p className="text-[1.8rem] font-bold my-10">
                  This app is something like a mixture between traveling app and accommodation
                  website similar to Airbnb.
                </p>
                <p className="my-5">
                  Section 'Profile' is accessible only for registered users, meaning you need to
                  create an account in 'Auth' section. In your profile, you can create a new
                  traveling ad/accommodation, as well as view all of your data - own traveling
                  ads/accommodation and also your reservations, you can either edit or delete those.
                </p>
                <p className="my-5">
                  If anyone creates/cancels their reservation at any of your posts, you'll get a
                  blinking notification until you click on it, confirming you've read it, then it
                  disappears. In 'Destinations' section, you can see all traveling ads. You can
                  react to it as long as you're logged in (like, dislike, comment post, or make a
                  reservation if there are enough spots left).
                </p>
                <p className="my-5">
                  In case of bigger amount of data, I added a filter, all ads can be filtered by
                  name, post owner, popularity (likes - dislikes) and also distance. Default
                  distance is from your location, but you can set it anywhere in the world (eg.
                  you're looking for someone traveling to Southeast Asia, so you click on Thailand
                  and set distance to 2000km). Section 'Accommodation' is very similar, the only
                  difference is that it has reviews instead of likes, dislikes and comments and you
                  need to select a date range to make a reservation. Filter is almost the same in
                  this section.
                </p>
                <p className="my-5">
                  Last info worth noting: you can dynamically see locations of all traveling
                  ads/accommodation on the map - traveling ads are yellow and accommodation is
                  purple.
                </p>
              </>
            }
            link="https://voyapp.jancesenek.dev"
            project
            video="/videos/Voyapp.mp4"
          />
          <Bubble
            title="Chulak Bazaar"
            content={czech ? "Online bazar" : "Online thrift shop"}
            hiddenStatus={hidden}
            clickTheBubble={() => setHidden(!hidden)}
            getDetail={(e) => setDetail(e)}
            tech="React/Vite.js, TailwindCSS, Express.js, Prisma, postgreSQL database"
            description={
              <>
                <p className="text-[1.8rem] font-bold my-10">
                  Tato aplikace je něco jako online bazar bez platební brány.
                </p>
                <p className="my-5">
                  V sekci 'Items' je vidět jednotlivé zboží buď na prodej, nebo k vydražení v aukci.
                  Zboží na prodej může mít libovolný počet kusů. Pokud chcete koupit jakékoliv
                  zboží, musíte být přihlášeni, tzn. musíte si vytvořit účet v sekci 'Auth'.
                  Samozřejmě musíte mít na účtě dostatek financí (každý uživatel začíná s 100000
                  fiktivními mincemi). Pokud úspěšně koupíte/prodáte zboží nebo vás někdo v aukcí
                  přehodí, dostanete zprávu od systému s veškerými informacemi.
                </p>
                <p className="my-5">
                  V sekci 'Users' máte možnost zobrazit si svůj profil, pokud jste přihlášeni, kde
                  máte možnost přidat/upravit/doplnit zboží, nebo také prodat zboží v aukci, pokud
                  na něj už někdo přihodil. Z profilu se dá také navigovat na seznam všech uživatelů
                  a je možné si také zobrazit cizí profily. Jména všech uživatelů jsou barevně
                  označena podle jejich recenzí od červené (nejhorší recenze) až po zelenou
                  (nejlepší recenze). Bílá barva znamená, že uživatel ještě žádné recenze nemá. Na
                  cizím profilu je možné pouze napsat danému uživateli recenzi, pokud od vás žádnou
                  ještě nemá.
                </p>
                <p className="my-5">
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
                <p className="text-[1.8rem] font-bold my-10">
                  This app is something like a thrift shop without payment gateway.
                </p>
                <p className="my-5">
                  In section 'Items', you can view particular items for sale/auction. Items for sale
                  can have unlimited pieces. If you wanna buy any items, you need to be logged in -
                  create an account in 'Auth' section. You obviously also need to have enough money
                  on your account (every user starts with 100000 fictional coins). If you
                  successfully buy/sell any item, or someone outbids you in an auction, you'll get a
                  system message with all information.
                </p>
                <p className="my-5">
                  In 'Users' section, you can view your profile, if you're logged in, you can
                  add/edit/replenish your items, or sell your items in an auction, if there's any
                  bid. You can also navigate to a list of all users and view other profiles. Names
                  of all users are colored by their reviews from red (worst reviews) to green (best
                  reviews). White color means the user doesn't have any reviews yet. You can make a
                  review for other users on their profiles as long as they don't have any from you
                  yet.
                </p>
                <p className="my-5">
                  In 'Messages' section, you can text any user. There is also a special conversation
                  called 'System' where you receive all system info about your transactions. If any
                  user bothers you in DMs, you can freeze the chat disallowing any communication
                  between the two of you until you unfreeze it.
                </p>
              </>
            }
            link="https://chulakbazaar.jancesenek.dev"
            project
            video="/videos/ChulakBazaar.mp4"
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
                <p className="text-[1.8rem] font-bold my-10">
                  Vlastní sociální síť, která funguje jako zjednodušená verze např. Facebooku.
                </p>
                <p className="my-5">
                  Je nutné vytvořit si vlastní účet, aby vás aplikace pustila dál. Po zaregistrování
                  vás aplikace přesměruje na váš profil (Profile), kde vidíte svoje informace (máte
                  možnost změnit část svých údajů - svoji profilovou fotku, zaměstnání a
                  planetu/zemi původu) a svoje příspěvky, které se na profilu dají vytvořit, upravit
                  nebo smazat. Zde vidíte také nevyřízené žádosti o přátelství, dokud máte
                  nevyřízené žádosti, v menu v sekci Profile bude blikat upozornění.
                </p>
                <p className="my-5">
                  Dále sekce News Feed, kde vidíte příspěvky všech uživatelů na síti kromě těch,
                  které si buď zablokujete, nebo kteří si zablokují vás. Tyto příspěvky lze
                  'lajkovat/dislajkovat' nebo komentovat.
                </p>
                <p className="my-5">
                  V sekci Users vidíte seznam všech uživatelů na síti, zde je možnost vyhledat
                  uživatele podle jména, v případě, že by se sociální síť rozrostla. Uživatelé se
                  zobrazují barevně podle toho, jaký s nimi máte vztah (bílá - žádný, žlutá -
                  přátelé, šedá - vy jste si zablokovali daného uživatele, průhledná s červenou
                  ikonou, cursor: not-allowed - daný uživatel si zablokoval vás, nebo se jedná o
                  admina, který není ve vašem seznamu přátel). Po kliknutí na uživatele se vám
                  zobrazí jeho profil a všechny jeho příspěvky. Zde máte možnost poslat žádost o
                  přátelství/odstranit ze seznamu přátel, nebo si daného uživatele zablokovat.
                </p>
                <p className="my-5">
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
                <p className="text-[1.8rem] font-bold my-10">
                  Own social media, which works as a simplified version of eg. Facebook.
                </p>
                <p className="my-5">
                  It's necessary to create your own account to be let in. After signing up, app
                  redirects you to your profile, where you can see your info (you can edit some of
                  your data - profile picture, occupation, planet/country of origin) and your own
                  posts, which can be created/updated or deleted on the profile. In this section,
                  you also see any unhandled friend requests, as long as you have any, you'll see a
                  blinking circle in the menu.
                </p>
                <p className="my-5">
                  In 'News Feed' section, you see posts of all social media users except those
                  who've blocked you, or whom you blocked. You can like/dislike/comment those posts.
                </p>
                <p className="my-5">
                  In 'Users' section, you see a list of all users on social media, it's possible to
                  filter them by name in case the social media grows. Users appear colored according
                  to your relationship with them (white - none, yellow - friends, grey - you blocked
                  the user, transparent with red icon, cursor: not-allowed - user has either blocked
                  you, or it's an admin not in your friendlist). After clicking on a user, you can
                  see his profile with all of his posts. You can send friend request/remove a user
                  from friends, or block/unblock a user.
                </p>
                <p className="my-5">
                  In 'Messages' section, you can see a list of all users you can text. You are
                  allowed to text yourself or your friends. If you have unread messages, you'll have
                  a notification in 'Messages' menu, which also appears on icons your conversations
                  with friends, where you have unread messages. You can also upload image files in
                  all posts, comments and DMs.
                </p>
              </>
            }
            link="https://wormholemedia.jancesenek.dev"
            project
            video="/videos/WormholeMedia.mp4"
          />
          <Bubble
            title={czech ? "Člověče, nezlob se!" : "Man, don't get angry!"}
            content={
              czech
                ? "Desková hra, kterou asi všichni znají. Pravidla se dají najít online, ačkoliv hra má více variant. V této variantě se hráč musí rozhodnout, jestli bude hrát s nasazenou figurkou, nebo si nasadí novou figurku, předtím, než hodí kostkou."
                : "Board game, rules can be looked up online, although there are different variants. In this one, player has to choose if he wants to move with an active piece or add a new one before rolling the dice."
            }
            hiddenStatus={hidden}
            clickTheBubble={() => setHidden(!hidden)}
            link="https://clobrdo.jancesenek.dev"
            project
          />
        </div>
      )}
    </div>
  );
};

export default Projects;
