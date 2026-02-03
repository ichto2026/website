import HeroImage from "~/components/HeroImage";
import type { Route } from "./+types/problems";
import { Link, useSearchParams } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Official Problems - IChTo 2026" },
    {
      name: "description",
      content: "Official Problems of International Chemistry Tournament 2026",
    },
  ];
}

export default function Problems() {
  const [searchParams, _setSearchParams] = useSearchParams();
  return (
    <div className="min-h-screen">
      {/* Hero Section with About.jpg background */}
      <HeroImage title="Official Problems" imageUrl="/problems.jpg" />

      {/* Problems Section */}
      <div className="container mx-auto px-4">
        {searchParams.has("submitted") && (
          <p className="px-4 py-4 mb-8 rounded-lg bg-red-400 text-white text-xl">
            Successfully Registered!
          </p>
        )}
        <div className="flex justify-center w-full">
          <iframe
            src="https://drive.google.com/file/d/121OfIqGh5jjp3sgRD6xojHgNQ5Asvmmp/preview"
            className="px-4 my-4 w-[720px] h-[480px] shadow-md rounded-sm"
          ></iframe>
        </div>
        <div className="text-gray-800 lg:px-16">
          <h2 className="text-3xl lg:text-4xl px-4 my-8">
            Problem 1. Coral glues
          </h2>
          <p className="px-4 my-4">
            Adhesives join two surfaces by creating physical contact and forming
            attractive forces across the interface. Typical industrial adhesives
            rely on van der Waals forces, covalent bonding, hydrogen bonds,
            ionic interactions, or mechanical interlocking. Most common
            commercial glues are designed for dry conditions: they rely on
            solvent evaporation, moisture-triggered curing, or oxygen inhibition
            – mechanisms that fail or are slowed dramatically underwater. Coral
            reefs are fragile and require rapid reattachment of fragments after
            storms or bleaching events. Design a non-toxic adhesive that can be
            applied directly in seawater to facilitate reattachment of coral
            fragments to calcium-carbonate surfaces, resisting salinity and
            dilution.
          </p>
          <h2 className="text-3xl lg:text-4xl px-4 my-8">
            Problem 2. Revolution is not for the sane
          </h2>
          <p className="px-4 my-4">
            Rhydonium is a fictional substance in the Star Wars universe that is
            used to power starships. In addition to its primary use as fuel, it
            also possesses multiple other special characteristics. It is
            described to be extremely unstable, producing explosions without a
            need for a spark. At the same time, it is also capable of inducing
            strong hallucinations in those who come into contact with it. While
            conventional fuels such as gasoline possess some of these
            characteristics, the effects are not even nearly as severe. Propose
            a compound (or mixture of compounds) that matches the fictional
            description of rhydonium as closely as possible (instability,
            psychoactivity, and usage as fuel). How unstable is your proposed
            substance, and what is the chemical explanation for this? What
            precautions would you need to employ in order to use it as fuel?
            What is the reason for its psychoactive nature?
          </p>
          <h2 className="text-3xl lg:text-4xl px-4 my-8">
            Problem 3. With great power comes great responsibility
          </h2>
          <p className="px-4 my-4">
            Spider-man is one of the most popular comic book hero, with a
            friendly demeanor and a strong sense of justice. He’s able to fight
            villains using his iconic webs, which allow him to swing from place
            to place and attach things to each other. This may sound fictional,
            but there are several materials which behave in a similar way, and
            it can also be possible to produce such webs at home. Using only
            materials available in a typical household or school lab, propose a
            protocol that could be used to make webs like those of Spider-man,
            capable of extending across long distances, forming attachments to
            objects and surfaces, and being able to withstand significant
            amounts of load. Estimate how strong and durable would these
            spider-webs be and suggest a simple way to detach them.
          </p>
          <h2 className="text-3xl lg:text-4xl px-4 my-8">
            Problem 4. Plates & Gels
          </h2>
          <p className="px-4 my-4">
            Thin layer chromatography (TLC) is one of the most commonly used
            techniques “to check a reactions completeness”, favoured by organic
            chemists around the world. It’s cheap, fast and applicable for many
            reactions. TLC, like all chromatography methods works by separating
            compounds by their different affinity towards the stationary and
            mobile phase, and this results in their differential movement
            compared to the solvent front, the ratio of the two is quantified as
            the retention factor. Biochemistry also uses several separation
            techniques such as classical chromatography-based ones but can also
            use electric fields to separate the materials in case of gel-
            electrophoresis techniques. Could you imagine a classical organic
            chemistry synthesis (not involving any biological macromolecules) in
            which TLC could not be used to monitor the reaction’s progress, but
            gel electrophoresis is a viable alternative? How would you visualize
            and interpret your results?
          </p>
          <h2 className="text-3xl lg:text-4xl px-4 my-8">
            Problem 5. Counter-counterfeiting
          </h2>
          <p className="px-4 my-4">
            Counterfeiting has existed as long as currency existed, and it
            causes financial damage even nowadays. There are several measures
            built into modern banknotes, such as intricate patterns, special
            materials, and invisible signs, to make the act of copying the notes
            more difficult. Given the modern forms of these, one could think
            that anti-counterfeiting measures are a novelty of the 20th century,
            the practice is much older, for example this is the reason why coins
            have ridged edges. Counterfeiters and anti-counterfeiting measures
            are at a constant technological arms-race, as older technologies can
            be easily countered by emerging ones. This presents a special
            problem for currencies that have been used for a long time, such as
            the United States dollar, of which banknotes even as old as 1914 are
            accepted today. Your task is to propose a method to incorporate a
            chemical signature to banknotes which can authenticate their
            printing series, in a way that is impossible or at least highly
            impractical to counterfeit. The signal must be reasonably simple to
            produce and read out, it must not rely on any pattern-based
            information, and it must be compatible with regular banknote usage.
          </p>
          <h2 className="text-3xl lg:text-4xl px-4 my-8">
            Problem 6. Peakmaxxing
          </h2>
          <p className="px-4 my-4">
            Nuclear magnetic resonance (NMR) spectroscopy is one of the most
            important and powerful analytical techniques that can be used to
            reveal the structure of molecules. Each NMR-active nucleus is
            represented by a peak in the spectrum, the chemical shift of which
            is indicative of its molecular environment. In these spectra,
            signals can be split into multiple subpeaks due to interactions with
            neighbouring nuclei, making the spectrum more complex. This can be
            undesirable in certain cases, for instance, 13C NMR is usually
            proton-decoupled to simplify the spectrum, allowing for easier
            interpretation. However, peak splitting patterns also reveal useful
            information about neighbouring nuclei. An interesting exercise would
            be to think about what the practical limit is to peak splitting
            patterns. Propose a molecule where one of the nuclei has the highest
            possible peak multiplicity, while the sub-peaks are still possible
            to simultaneously resolve with a high-performance instrument. You
            may utilise any NMR-active nucleus, but your molecule must be
            sufficiently stable to record a spectrum with, and your solution
            must also include a synthesis for the molecule. Explain how the
            splitting pattern arises, with approximate coupling constants, and
            provide a justification as to why higher multiplicity is not
            possible to achieve.
          </p>
          <h2 className="text-3xl lg:text-4xl px-4 my-8">
            Problem 7. Like Dissolves Like
          </h2>
          <p className="px-4 my-4">
            The solubility of many substances can be rationalized using the
            “like dissolves like” principle: polar solvents tend to dissolve
            polar solutes, while non-polar solvents dissolve non-polar solutes;
            the reverse is usually not true. Surfactants are amphiphilic
            compounds that contain both polar and non-polar regions, which
            allows them to interact with both polar and non-polar environments.
            However, their solubility in either solvent is often limited, or
            they require the presence of a second phase to form micelles.
            Propose an ionic compound (or a family of such compounds) that
            exhibits high solubility in both pure water and pure liquid alkanes
            (e.g., pentane or hexane). Explain the structural or chemical
            features that enable this unusual dual solubility and discuss any
            factors that might affect it. Propose a complete, plausible
            synthetic route for your compound(s), including reagents, reaction
            conditions, and purification methods.
          </p>
          <h2 className="text-3xl lg:text-4xl px-4 my-8">
            Problem 8. Is Hanji the future of papers?
          </h2>
          <p className="px-4 my-4">
            Traditional Korean paper, known as Hanji, is renowned for its
            exceptional durability. It has been reported to withstand rain
            without significant damage and can be preserved for centuries
            without special storage conditions, even under high humidity.
            Additionally, Hanji possesses notable thermal properties that once
            made it an effective insulator in traditional Korean homes, keeping
            interiors warm during winter and cool during summer. In contrast,
            most modern papers do not seem to be able to compete with Hanji.
            They have been optimized for mass production, often sacrificing
            long-term durability and environmental resistance in the process.
            Your task will be to design a chemical process or treatment that
            could be integrated into modern paper manufacturing to make the
            resulting paper comparable in properties to Hanji (resistance,
            durability, heat conductivity), while remaining scalable and
            economically feasible for mass production.
          </p>
          <h2 className="text-3xl lg:text-4xl px-4 my-8">Problem 9. Henna</h2>
          <p className="px-4 my-4">
            Henna is a natural pigment derived from leaves of the plant Lawsonia
            inermis. Its use goes back eons, as it has been mentioned in sources
            dating back even to antiquity. Thus, it’s not surprising that it has
            a widespread cultural use of several nations on multiple continents,
            often as part of wedding traditions. It is commonly used as
            temporary body art, often likened to tattoos, which is achieved by
            the careful application of henna paste onto the skin. There henna
            creates an ever-darkening colour via an oxidative process, which
            reaches its maximum intensity over several days, and remains on the
            skin until the stained layer is slowly replaced by the body’s
            natural processes. Your task is to design a treatment that can speed
            up the darkening of the henna drawings on skin which would otherwise
            take days, quickly resulting in a dark colour instead of the initial
            reddish hues. Naturally, the process must not be harmful to people.
          </p>
          <h2 className="text-3xl lg:text-4xl px-4 my-8">
            Problem 10. Contact Lenses
          </h2>
          <p className="px-4 my-4">
            Contact lenses have transformed the optical medicine industry by
            providing a convenient alternative to wearing glasses for people
            with vision problems. Over time, their use has expanded beyond
            medical purposes, as modern lenses can also be produced in a wide
            range of colors and patterns for cosmetic enhancement. Despite these
            advantages, many contact lens wearers struggle with eye dryness when
            wearing lenses continuously for longer periods of time. Although eye
            drops and artificial tears can temporarily relieve the symptoms,
            their frequent application is not always convenient or practical
            during everyday activities. Propose an improvement to contact lens
            design that enables safe and comfortable prolonged wear (at least 72
            hours of continuous wear under normal daily activities) without
            causing or worsening dry-eye symptoms. The improved lenses must
            retain the essential functional features of conventional soft
            contact lenses (optical correction, comfort, oxygen
            transmissibility, fit) and be suitable for realistic manufacturing
            and consumer use.
          </p>
          <h2 className="text-3xl lg:text-4xl px-4 my-8">
            Problem 11. Oh! There is a microplastic in my soup!
          </h2>
          <p className="px-4 my-4">
            Every year, the concentration of micro- and nanoplastics is
            continuously increasing in the ocean, raising health concerns about
            the consumption of food derived from sea products since it could be
            contaminated with these particles. However, the development of
            techniques to reduce or even quantify micro- and nano plastics in
            complex matrices is still in the early stages. Your task will be to
            choose a seafood-based soup or stew typical for your region and
            propose a chemical methodology to reduce the micro- and nanoplastics
            that it may contain. Explain the mechanism behind the reduction and
            evaluate the efficacy of your methodology. Consider that the flavor
            could be modified, but the food has to be edible after the
            procedure.
          </p>
          <h2 className="text-3xl lg:text-4xl px-4 my-8">
            Problem 12. Save the Crunch
          </h2>
          <p className="px-4 my-4">
            Potato chips (or crisps) are extremely popular snacks, consumed in
            all shapes, sizes, and flavours around the world, and part of what
            makes them so appealing is their crispiness. However, the chips
            quickly lose their crispiness when exposed to air due to moisture
            absorption. Manufacturers use packaging techniques like nitrogen
            flushing and moisture barriers, but once the bag is open, the
            contents must be consumed reasonably quickly, as the chips could go
            soggy in just a few days. It would be interesting to investigate how
            to reverse this process. Your task is to propose a chemical
            treatment that is capable of restoring crispiness in soggy potato
            chips, without significantly raising or lowering the temperature
            during the process. The resulting chips must still be palatable and
            safe to consume.
          </p>
        </div>
        {/*
        <div className="text-gray-800">
          <p className="px-4 my-4 text-xl">
            Problem set of IChTo-2026 will be released soon.
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold px-4 my-8">
            Problem set of IChTo-2025 (Bucharest, Romania)
          </h1>
          <h2 className="text-3xl lg:text-4xl px-4 my-8">
            Problem 1. Blue Irises
          </h2>
          <p className="px-4 my-4">
            Irises (original title in French: Les Iris) is a fairly well-known
            painting by Vincent van Gogh, portraying a landscape of flowers,
            predominantly of blue irises. However, up until recently one
            question has been boggling art historians regarding this particular
            piece of work; contemporary descriptions wrote about violet irises,
            despite the painting featuring blue flowers today.
          </p>
          <p className="px-4 my-4">
            Spectroscopic and chemical analysis have shown that the flowers were
            indeed violet originally, only that the red pigment of the paint has
            degraded and faded over time, resulting in the flowers’ blue colour
            that we can see today.
          </p>
          <p className="px-4 my-4">
            Your task is to read up on its literature, identify the chemical
            formula of the red pigment in question, and the chemical reaction
            involved in its degradation. Finally, and most importantly, propose
            a chemical synthesis route for the original pigment molecule, from
            the most likely end-product of the degradation process. The
            synthesis route is in no way confined to the conditions that are
            compatible with an oil painting, you can start from a pure compound,
            and your solution may use any suitable laboratory techniques and
            equipment.
          </p>
          <h2 className="text-3xl lg:text-4xl px-4 my-8">
            Problem 2. Ethereal for Eternity
          </h2>
          <p className="px-4 my-4">
            In today’s world, digital cameras dominate photography, pushing the
            magic of analog photography into the background of everyday life.
            Its final stronghold now lies with artists who use this unique
            medium to create their pieces. While the use of light-sensitive
            silver halides is one of the most well-known analog techniques, it
            is by no means the only one. Throughout the 19th century, various
            alternative photographic processes emerged, including tintypes,
            daguerreotypes, cyanotypes, the chlorophyll process, and anthotypes,
            each offering its own unique approach to capturing the world around
            us. While the most common silver-halide based photography is briefly
            mentioned in high school chemistry curricula, the rest has a
            chemical background just as interesting if not more.
          </p>
          <p className="px-4 my-4">
            Anthotypes, one of the most extraordinary techniques of analog
            photography, only require plant extracts and some patience to create
            these beautiful ethereal images, making them a perfect candidate for
            a kitchen-suitable experiment. With analog photos, the use of an
            appropriate fixer is essential to make the image permanent. It is
            straightforward in the case of most processes, silverhalides
            requiring a bath of ammonium thiosulphate, cyanotypes only water,
            and the chlorophyll process having copper ions as a proposed fixer.
            However, there is no such method to preserve anthotypes that could
            help make the image permanent. Your task is to propose a possible
            treatment, or to find an appropriate starting material, that could
            keep anthotypes from disappearing due to light exposure. In your
            solution, you should also estimate the durability of your fixing
            process.
          </p>
          <h2 className="text-3xl lg:text-4xl px-4 my-8">
            Problem 3. Chirality without carbon or metals
          </h2>
          <p className="px-4 my-4">
            When thinking about chirality, probably the first thought would be
            “asymmetric carbon atom”. It was believed that chirality was
            restricted to organic chemistry, but it was proved that metal
            complexes could also be chiral, without asymmetric carbon atoms.
            Even purely inorganic optically active compounds have been
            identified, also based on metal ions. What about an inorganic
            molecule (not polymeric structure) that contains neither carbon
            atoms nor metal atoms, but presents chirality? Your task is to
            propose such a molecule, explain how it could be synthesized and
            characterized and discuss the origin of its chirality.
          </p>
          <h2 className="text-3xl lg:text-4xl px-4 my-8">
            Problem 4. Laser vision!
          </h2>
          <p className="px-4 my-4">
            Have you ever read any Marvel comics or watched any of their movies?
            If so, you may have heard of Cyclops, a well-known superhero capable
            of producing high intensity red beams which he uses to defeat his
            enemies. Imagine you are like him and have the ability to produce
            high intensity monochromatic beams (not necessarily red) from your
            eyes. However, you’re unable to control them, which could result in
            damage to your surroundings, so, like him, you have to wear special
            glasses. What material(s) should these glasses be made of so that in
            case you unintentionally produce a beam, it is absorbed but not
            transmitted? Design such glasses that can also be used to see
            through them within some domains of the visible light spectrum.
            Propose the process for synthesizing the material(s). In addition,
            explain the mechanism behind the absorption, as well as how you
            would prevent damaging yourself and the people around you.
          </p>
          <h2 className="text-3xl lg:text-4xl px-4 my-8">
            Problem 5. “Bonfireworks”
          </h2>
          <p className="px-4 my-4">
            Fireworks originated from China at the end of the first millennium
            while bonfires are as old as humanity itself. They are used to mark
            special occasions, both historically as part of various traditions
            and folk festivities but are also quite popular even today. Despite
            serving a similar function there are some differences between them.
            While fireworks are usually colourful, awe-inspiring, loud and
            spectacular, the more subtle bonfires exude warmth, a sense of
            familiarity and community. Regardless of which form, it is no
            question that humans are fascinated by these magnificent displays of
            fire and light.
          </p>
          <p className="px-4 my-4">
            One might consider combining the two to create “bonfireworks” - a
            bit of the best of both worlds. Propose a method that can be used to
            make the flames of a traditional bonfire colourful. The materials
            you use must not be harmful to people observing the event, and they
            must not be polluting to the environment, nor can they produce
            substances that can leach from the remaining ash.
          </p>
          <h2 className="text-3xl lg:text-4xl px-4 my-8">
            Problem 6. Inorganic candle
          </h2>
          <p className="px-4 my-4">
            Not long-ago candles were the default choice for indoor lighting.
            However, limited access to bee’s wax made late night reading and
            writing a privilege for the rich. Although kerosene lamps and
            electric lightbulbs made candles obsolete, candles still retain a
            significant cultural role. Modern candles use hydrocarbons for wax,
            but petroleum products are also on their way of being phased out.
          </p>
          <p className="px-4 my-4">
            Propose an inorganic compound or mixture that could function like a
            normal candle or spirit lamp, capable of producing a sustained flame
            with a wick. Your candle should not pose any danger to the user if
            used properly.
          </p>
          <h2 className="text-3xl lg:text-4xl px-4 my-8">
            Problem 7. Molecular roundabout
          </h2>
          <p className="px-4 my-4">
            The discovery of catenanes and rotaxanes has opened the doors
            towards the astonishing field of mechanically interlocked molecular
            architectures. Chemists have managed to control the position of a
            mechanically bonded ring on a dumbbell between two or even three
            stations. This means that we could control the position of one ring
            in a catenane by placing stations on the other one and the motion
            could be continuous. However, could we ensure a unidirectional
            motion? Your task is to design a catenane for which the motion of
            one ring could be controlled to be unidirectional and the sense of
            this rotation could be switched by changing the stimuli used or
            their order. Propose the synthesis of your compound and think of a
            possible application.
          </p>
          <h2 className="text-3xl lg:text-4xl px-4 my-8">
            Problem 8. Mysterious Monasteries
          </h2>
          <p className="px-4 my-4">
            The Voronet Monastery, known for its beauty as the Sistine Chapel of
            the East, is a gem of late medieval architecture, and is the most
            famous amongst the painted churches of Bucovina located in northern
            Romania. Inside or out, almost every square inch of the building’s
            walls is covered with finely detailed frescoes depicting religious
            scenes.
          </p>
          <p className="px-4 my-4">
            One of the most striking things about the frescoes is their
            prominent featuring of a vibrant shade of blue. It is so
            characteristic to the building, that this particular shade of blue
            in art is known as Voronet blue. It is still somewhat a mystery how
            the paintwork remained in this good of a condition despite the
            passing of several centuries.
          </p>
          <p className="px-4 my-4">
            The blue pigment behind the colour is mainly azurite, which was not
            produced in the region at that time. Several locations have been
            proposed as the potential source of azurite, but its exact origin
            remains a mystery too.
          </p>
          <p className="px-4 my-4">
            Propose a non-destructive, non-invasive technique, which would be
            suitable for analysing the blue azurite in ‘Voronet blue’ to yield
            information about its geographical origin via its measured
            properties. How would the method work, what data could it
            potentially yield, and how would you connect your data to the
            potential source locations?
          </p>
          <h2 className="text-3xl lg:text-4xl px-4 my-8">
            Problem 9. Acid or base? Beyond the pH scale
          </h2>
          <p className="px-4 my-4">
            The pH scale that we commonly use is based on the equilibrium of
            water since it is a substance that can self-ionize. This scale is of
            great importance because water is a polar solvent that can dissolve
            a wide variety of substances, both inorganic and organic, and
            multiple chemical and biological phenomena occur in aqueous media.
            Could a different scale be developed? Propose an alternative
            acid-base scale based on a substance other than water. Include the
            autoionization reaction of the chosen substance and explain which
            acid- base theory best supports your proposal, specifying which
            chemical species would act as “acid” and “base”. Develop the new
            scale by doing calculations using equilibrium constants.
            Additionally, propose some compounds that could act as acid and
            bases in the solvent and the kind of reactions that could happen in
            this medium.
          </p>
          <h2 className="text-3xl lg:text-4xl px-4 my-8">
            Problem 10. Kinetics of fermentation!
          </h2>
          <p className="px-4 my-4">
            Alcohol has many applications in our current society: as a fuel,
            disinfectant, solvent, reagent in many chemical reactions, or simply
            as a drink. One of the more well-known methods to obtain alcohol is
            through fermentation, a simple yet sensible process in which a
            microorganism metabolizes glucose to convert it into ethanol.
            Fermentation has been so widely used that all the materials and
            reagents necessary for it are easily accessible, allowing anyone to
            investigate it at home.
          </p>
          <p className="px-4 my-4">
            Using only materials and equipment that can be found in a
            conventional house, design and execute an experiment capable of
            giving you information on how the fermentation process is carried
            out through time. Study what kind of factors influence the rate of
            fermentation, and how microorganisms switch between respiration and
            fermentation. Is there a set of optimal conditions for maximising
            fermentation?
          </p>
        </div>
        */}
        <div className="text-blue-800 px-4 lg:px-20 my-8">
          <p className="my-4">
            <Link to="http://ichto.org/media/uploads/2025/04/IChTo-2025-problem-set.pdf">
              Problem set of 2025
            </Link>
          </p>
          <p className="my-4">
            <Link to="http://ichto.org/en/problems/">
              Problems of the other past tournaments
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
