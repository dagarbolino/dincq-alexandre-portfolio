import videoCVGen from '../assets/videos/cvgen.mp4';
import videoInvoice from '../assets/videos/InvoiceNext.mp4';
import videoKasa from '../assets/videos/kasa.mp4';
import videoOhmyfood from '../assets/videos/ohmyfood.mp4';





const Projects = () => {

  return (
    <>
      <div id='projects'
        className="my-2 mb-24 flex flex-col justify-center items-center w-72 h-auto gap-10">
        <div className="">
          <h2 className='my-6 mb-10 text-3xl text-white
            sm:text-4xl
            md:text-6xl md:mt-20
          '>Projets</h2>
        </div>

        <div className="">
          <div className="
            sm:flex sm:flex-row sm:justify-center sm:items-center sm:gap-10 sm:mt-10  
            md:flex md:flex-row md:justify-center md:items-center md:gap-10 md:mt-20
            ">
            <div className="">
              <h2 className='my-2 text-2xl text-white
              sm:text-3xl
              md:text-4xl md:mt-10
            '>InvoiceNext</h2>

              <p className='w-72 h-auto text-white text-sm my-6 flex flex-col justify-center items-center
            sm:text-base
            md:text-lg'>
                Sur ce site web InvoiceNext, vous pourrez bénéficier de divers fonctionnalités. Comme la possibilité de créer une facture,
                faire un inventaire, faire un rendement pour vous calculer une marge sur un produit
                (exemple dans un rayon traditionnel boucherie faire le rendement d&apos;une carcasse de boeuf),
                enregistrer un suivi de traçabilité ou un suivi de nettoyage.
              </p>
            </div>


            <div className=" my-6 flex flex-col justify-center items-center w-72 h-auto">
              <video
                width="600"
                controls
                muted
                preload="auto">
                <source src={videoInvoice} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <a
            href="https://github.com/dagarbolino/invoice"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline
            sm:mt-10 sm:text-base
            md:mt-20 md:text-lg
            ">
            Voir le projet sur GitHub
          </a>


        </div>


        <div className="">
          <div className="
            sm:flex sm:flex-row sm:justify-center sm:items-center sm:gap-10 sm:mt-10  
            md:flex md:flex-row md:justify-center md:items-center md:gap-10 md:mt-20
            ">
            <div className="">
              <h2 className='my-2 text-2xl text-white
              sm:text-3xl
              md:text-4xl md:mt-10
            '>CVGen</h2>

              <p className='w-72 h-auto text-white text-sm my-6 flex flex-col justify-center items-center
            sm:text-base
            md:text-lg

            '>CVGen est une application web qui permet de générer un CV en ligne.
                L&apos;utilisateur peut choisir parmi plusieurs templates de CV,
                puis remplir les champs de formulaire pour générer un CV en format PDF.
              </p>
            </div>


            <div className=" my-6 flex flex-col justify-center items-center w-72 h-auto">
              <video
                width="600"
                controls
                muted
                preload="auto">
                <source src={videoCVGen} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <a
            href="https://github.com/dagarbolino/vitae"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline
            sm:mt-10 sm:text-base
            md:mt-20 md:text-lg
            ">
            Voir le projet sur GitHub
          </a>


        </div>

        <div className="mt-10">
          <div className=" sm:flex sm:flex-row sm:justify-center sm:items-center sm:gap-10 sm:mt-10  
              md:flex md:flex-row md:justify-center md:items-center md:gap-10 md:mt-20">
            <div className="
            ">

              <h2 className='my-2 text-2xl text-white
                sm:text-3xl
                md:text-4xl md:mt-10'>
                Kasa
              </h2>
              <p className='w-72 h-auto text-white text-sm my-6 flex flex-col justify-center items-center
                sm:text-base
                md:text-lg'>

                Kasa est l&apos;intégration d&apos;une maquette en React pour un site d&apos;agence immobilière.
                Le site comprend une page d&apos;accueil, une redirection vers le détail d&apos;un appartement ou d&apos;une maison avec leur description,
                ainsi qu&apos;une page À propos.
              </p>
            </div>
            <div className=" my-6 flex flex-col justify-center items-center w-72 h-auto">
              <video
                width="600"
                controls
                muted

                preload="auto">
                <source src={videoKasa} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <a
            href="https://github.com/dagarbolino/Kaza-master"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline
              sm:mt-10 sm:text-base
              md:mt-20 md:text-lg
            ">
            Voir le projet sur GitHub
          </a>
        </div>



        <div className="mt-10">
          <div className="sm:flex sm:flex-row sm:justify-center sm:items-center sm:gap-10 sm:mt-10  
            md:flex md:flex-row md:justify-center md:items-center md:gap-10 md:mt-20">
            <div className="
            
            ">
              <h2 className='my-2 text-2xl text-white
              sm:text-3xl
              md:text-4xl md:mt-10
            '>ohmyfood</h2>
              <p className='w-72 h-auto text-white text-sm my-6 flex flex-col justify-center items-center
              sm:text-base
            md:text-lg
              '>
                Ohmyfood est un site web de réservation de menus de restaurants gastronomiques.
                L&apos;utilisateur peut choisir un menu parmi une sélection de restaurants, puis voir leurs differents plats qui sont proposés.
              </p>
            </div>
            <div className=" my-6 flex flex-col justify-center items-center w-72 h-auto">
              <video
                width="600"
                controls
                muted

                preload="auto">
                <source src={videoOhmyfood} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <a
            href="https://github.com/dagarbolino/Ohmyfood"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline
              sm:mt-10 sm:text-base
              md:mt-20 md:text-lg
            ">
            Voir le projet sur GitHub
          </a>
        </div>




        <div className="mt-10">
          <div className="sm:flex sm:flex-row sm:justify-center sm:items-center sm:gap-10 sm:mt-10  
            md:flex md:flex-row md:justify-center md:items-center md:gap-10 md:mt-20">
            <div className="
            
            ">
              <h2 className='my-2 text-2xl text-white
              sm:text-3xl
              md:text-4xl md:mt-10
            '>Au Beurre Noisette</h2>
              <p className='w-72 h-auto text-white text-sm my-6 flex flex-col justify-center items-center
              sm:text-base
            md:text-lg
              '>
                Au Beurre Noisette est un commerce itinérant spécialisé dans la vente de produits laitiers et fromages d'exception.
                Notre site web vous permet de découvrir notre sélection raffinée de fromages,
                que vous pouvez facilement filtrer selon le type de lait et la texture de la pâte.
                Vous y trouverez également nos différents points de vente ainsi qu&apos;une collection
                de délicieuses recettes pour sublimer nos produits.
              </p>
            </div>
            <div className="my-6 flex flex-col justify-center items-center w-72 h-auto">
              <a href="https://aubeurrenoisette.alex-webdev.fr" target="_blank" rel="noopener noreferrer">
                <img
                  src="/src/assets/images/aubeurrenoisette.png"
                  alt="Au Beurre Noisette"
                  className="w-full h-auto rounded-lg shadow-lg hover:opacity-90 transition-opacity"
                />
              </a>
            </div>

          </div>
          <a
            href="https://github.com/dagarbolino/aubeurrenoisette"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline
              sm:mt-10 sm:text-base
              md:mt-20 md:text-lg
            ">
            Voir le projet sur GitHub
          </a>
        </div>




      </div>


    </>
  )
}

export default Projects