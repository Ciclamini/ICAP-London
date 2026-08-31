import PageLayout from "../components/PageLayout";

export default function CommunityAchievements() {
  const sectionStyle = {
    fontFamily: "Playfair Display, serif",
    color: "#432616",
  };

  const textStyle = {
    fontFamily: "Crimson Text, serif",
    fontSize: "1rem",
    color: "#432616",
    lineHeight: "1.7",
  };

  const listStyle = {
    fontFamily: "Crimson Text, serif",
    fontSize: "1rem",
    color: "#432616",
    lineHeight: "1.6",
  };

  return (
    <PageLayout activePage="CommunityAchievements">
      {/* Breadcrumb */}
      <nav
        className="mb-4 text-sm"
        style={{ fontFamily: "Crimson Text, serif", color: "#5a3d28" }}
      >
        <button
          onClick={() => navigate("/")}
          className="underline hover:opacity-75 transition"
          style={{ color: "#2c6e8a" }}
        >
          Home
        </button>
        <span className="mx-1">›</span>
        <button
          onClick={() => navigate("/people-and-their-stories")}
          className="underline hover:opacity-75 transition"
          style={{ color: "#2c6e8a" }}
        >
          People and their Stories
        </button>
        <span className="mx-1">›</span>
        <button
          onClick={() => navigate("/people-and-their-stories/history")}
          className="underline hover:opacity-75 transition"
          style={{ color: "#2c6e8a" }}
        >
          History
        </button>
        <span className="mx-1">›</span>
        <span style={{ color: "#432616" }}>
          Contributions from the Community
        </span>
      </nav>

      <div className="ornamental-border bg-[#f5f0e8] p-8">
        {/* Header */}
        <h1
          className="text-4xl font-bold mb-3"
          style={{
            fontFamily: "Playfair Display, serif",
            letterSpacing: "0.05em",
            color: "#432616",
            marginBottom: "1.5rem",
          }}
        >
          Contributions from the Community
        </h1>
        <h2 className="text-3xl font-bold mb-3" style={sectionStyle}>
          A Reflection on the Achievements of the London Italian-Canadian
          Community
        </h2>

        <p className="mb-4 italic" style={textStyle}>
          [Originally delivered at the Italian Canadian Archives Project Annual
          Conference, Western University, 2016]
        </p>

        <p className="mb-1" style={textStyle}>
          By Pasquale Palombo
        </p>

        <p className="mb-6" style={textStyle}>
          January 25, 2021
        </p>

        <img
          src="/Christmas_Shopping.jpg"
          alt="Italian-Canadian family in London, Ontario"
          className=" h-auto mb-6"
          style={{
            width: "60%",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <p
          className="leading-relaxed mb-6"
          style={{
            fontFamily: "Crimson Text, serif",
            fontSize: "1rem",
            color: "#432616",
            display: "block",
            textAlign: "center",
          }}
        >
          <b>
            <i>Christmas Shopping, 1954.</i>
          </b>
          <br></br>Photo Credits: Christmas shopping at Dundas and Richmond Sts., December 24, 1954 (LFP Coll) ,
          The London Free Press Collection of Photographic Negatives, Archives and Special Collections, Western Libraries, 
          Western University, London, Canada
.
        </p>

 <div
          className="h-px mb-8"
          style={{
            background:
              "linear-gradient(to right, transparent, #c4943e, transparent)",
          }}
        />

        {/* Introduction */}
        <div className="space-y-5 mb-10" style={textStyle}>
          <p>
            It was a mid-September day a few years ago that I was summoned, for
            the fourth time, to appear in court on jury duty, and with my luck I
            was selected as one of the jurors. During these three days, we were
            ordered from time to time to recess in a room on the 14th floor, and
            discuss the findings of the case we were called to witness and
            eventually reach a verdict.
          </p>

          <p>
            It was during these breaks that I had the opportunity to admire the
            astonishing beauty of a London I had never witnessed before. In
            fact, looking through the windows so high above ground, I had a
            bird&apos;s eye view of Labatt&apos;s Park baseball diamond on the
            right, the forks of the Thames on the left, and next to it, the Art
            Gallery, Museum London. Just past these three landmarks, a canopy of
            green extended almost to the horizon and engulfed the rest of the
            city in bucolic scenery.
          </p>

          <p>
            I saw it under sunny skies, under the rain and the following sunny
            breaks, but my awe never changed and if anything, it made me realize
            why our London is also recognized appropriately as "The Forest
            City." In what the famous 20th century English composer Edward Elgar
            might have called a "land of hope and glory." It was here that a
            great number of people from our motherland decided to anchor
            themselves down and start a new chapter in their lives.
          </p>

          <p>
            I would refer to these people as the pioneers of our community.
            People who brought with themselves all those essential human values:
            honesty, integrity, and most importantly, the values of hard work,
            the ability to save money, spirit of self-denial, but above all
            else, love and total commitment to the family. That has always been
            the pillar of our civilization; virtues and principals "allattate
            dal seno materno."
          </p>

          <p>
            In many cases, these were illiterate or semi-illiterate individuals
            whom, despite all odds, had refused all compromise of a meager and
            less than honorable existence to provide an opportunity for a better
            life to their children and grandchildren.
          </p>

          <p>
            As the ancient Romans used to say: <em>ubi panis, ibi patria</em>,
            which means "where it is/well, there is one&apos;s country." It
            would also be worthwhile to inconvenience the great Dante Alighieri
            that in his <em>Divina Commedia</em> (Inferno) asserts:{" "}
            <em>
              Fatti non foste a viver come bruti, ma per seguir virtute e
              conoscenza
            </em>{" "}
            ["not to exist like brutes, but made were ye to follow virtue and
            intelligence"]. (From "Italian Roots and Canadian Blossoms" of
            Arcangelo Martino).
          </p>

          <p>
            They chose to come to a country whose languages and culture they
            didn&apos;t know, a country practically inhabitable during its
            frigid winter months, and they were prepared to endure humiliation
            and racist epithets due to their diversity. They accepted the
            humblest of works, they worked long hours, in many cases working
            more than one job, and on occasion they walked and covered
            considerable distances to reach their workplace.
          </p>

          <p>
            None of these difficulties diminished their commitment, nor
            undermined their determination to progress and achieve their goals.
            In many cases, and despite the lack of basic education, they showed
            a remarkable forward-thinking ability to inspire their children by
            impressing upon them the importance of schooling and higher
            education.
          </p>

          <p>
            Therefore, I deemed it necessary to draft a list of commendable
            Italian-Canadians or Canadians from Italian descent, who through
            their hard work and dedication, made an invaluable contribution in
            many fields towards the betterment of our city and our society at
            large.
          </p>
        </div>

        {/* Politics */}
        <Section title="Politics">
          <Person
            name="Orlando Zamprogna"
            details={[
              "Elected in 1970",
              "Served as deputy mayor to three mayors: Jane Bigelow, Al Gleeson, and Tom Gosnell",
            ]}
          />

          <Person
            name="Anne Marie De Cicco-Best"
            details={[
              "60th and longest serving mayor of London",
              "Took office on December 4th, 2000 to November 30th, 2010",
              "First elected to city council in 1991 in Ward 5",
              "Elected to the board of control and served as deputy mayor to Dianne Haskett",
            ]}
          />

          <Person
            name="Joe Fontana"
            details={[
              "Liberal MP from 1987 to 2006",
              "Mayor of London from 2010 to his conviction for fraud and forgery in 2014",
              "Sentenced to house arrest for four months and 18 months of probation",
            ]}
          />

          <Person
            name="Frank Mazzilli"
            details={[
              "Elected on June 3, 1999 to September 2, 2003",
              "Parliamentary assistant to the Minister of Tourism, Culture, and Recreation under Tim Hudak",
              "Parliamentary assistant to the Solicitor General",
            ]}
          />

          <Person
            name="Roger Caranci"
            details={[
              "Was councillor for three terms",
              "Ran unsuccessfully for Liberal MP and then for mayor",
            ]}
          />

          <Person
            name="Fred Tranquilli"
            details={[
              "Elected councillor in the 1997–2000 election in Ward 3 and again in 2000–2003",
              "From 2006 to present, partner with Lerners LLP",
            ]}
          />

          <Person
            name="Irene Mathyssen"
            details={[
              "MPP of Ontario from 1990–1995 and briefly served as a minister in the government of Bob Rae",
              "Of Italian descent",
              "Elected MP in 2006 in the London–Fanshawe riding and subsequently re-elected in 2008, 2011, and 2015",
            ]}
          />
        </Section>

        {/* Religious Positions */}
        <Section title="Religious Positions">
          <Person
            name="Bishop Ronald Peter Fabbro"
            details={[
              "Born November 6th, 1950 in Sudbury, Ontario",
              "Appointed April 27th, 2002",
              "On March 9th, 2016, elected President of the Assembly (ACBO)",
            ]}
          />
        </Section>

        {/* Police Services */}
        <Section title="Police Services">
          <Person
            name="Julian Fantino"
            details={[
              "Former Chief of Police in London and Toronto",
              "Former Canadian politician for the PC Party",
              "Elected MP for the riding of Vaughan on November 29th, 2010 until his defeat in 2015",
            ]}
          />
        </Section>

        {/* Health Care */}
        <Section title="Health Care">
          <Person
            name="Tony Dagnone"
            details={[
              "President and CEO of London Health Sciences Centre",
              "Appointed Board Chair of the Ontario Hospital Association in 1992",
              "Granted the Order of Canada for his community work and leadership in healthcare",
              "In 2003, awarded the Queen's Jubilee Medal",
              "Retired on December 31st, 2005 after 38 years of a distinguished career in healthcare",
            ]}
          />

          <Person
            name="Dr. Rolando Del Maestro"
            details={[
              "Received his medical degree from the University of Western Ontario in 1973",
              "Received his PhD in Biochemistry from the University of Uppsala, Sweden, in 1979",
              "Director of Brain Research Laboratories from 1981–2000",
              "In 1991 became Professor of Neurosurgery",
              "In 2000 was recruited by the Montreal Neurological Institute and Hospital at McGill University",
              "Awarded the first McGill Neurological Teaching Award",
              "Retired in 2012 and focused on surgical simulation using the NeuroTouch platform",
            ]}
          />
        </Section>

        {/* Construction */}
        <Section title="Construction and Development">
          <p className="mb-4" style={textStyle}>
            Some of the most successful people in the local construction
            industry are also Italian and have contributed to the changing shape
            of our city&apos;s skyline. Most notably:
          </p>

          <ul className="list-disc pl-6 space-y-3" style={listStyle}>
            <li>
              <strong>The Tri Car Group</strong> — President Joe Carapella
            </li>
            <li>
              <strong>Southside Group</strong> — President Vito Frijia
              <ul className="list-disc pl-6 mt-2">
                <li>
                  He is also president and owner of the London Lightning
                  basketball team.
                </li>
              </ul>
            </li>
            <li>
              <strong>Domus Developments London Inc.</strong> — Family owned
              <ul className="list-disc pl-6 mt-2">
                <li>
                  Specializing mostly in award-winning residential condominium
                  projects.
                </li>
              </ul>
            </li>
          </ul>
        </Section>

        {/* Law */}
        <Section title="Law">
          <Person
            name="Claude Pensa"
            details={[
              "Founder and partner of the London legal practice Harrison Pensa LLP",
            ]}
          />
        </Section>

        <div
          className="h-px my-10"
          style={{
            background:
              "linear-gradient(to right, transparent, #c4943e, transparent)",
          }}
        />

        {/* Conclusion */}
        <h3 className="text-2xl font-bold mb-5" style={sectionStyle}>
          Conclusion
        </h3>

        <div className="space-y-5" style={textStyle}>
          <p>
            In conclusion, as you might have noticed, our Italian-Canadian
            community of London, Ontario has vastly contributed and
            distinguished itself in the promotion of family values while
            actively participating in the social, political, economic,
            religious, and law and order aspects of our society.
          </p>

          <p>
            At this point I would dare say, except for the traditional
            English-speaking countries (namely, England, Scotland, Ireland, and
            Wales), no other ethnic group has achieved such success. In fact,
            the 20-year period between 1990 and 2010 represented the apogee in
            our history.
          </p>

          <p>
            Since members of our community occupied all key posts at every
            level, that is especially at the political level, where we had
            representatives in the municipal government with Roger Caranci;
            provincially we had Frank Mazzilli, and to top it all off, Anne
            Marie De Cicco was elected mayor of London.
          </p>

          <p>
            And let us not forget that Reverend Peter Ronald Fabbro was
            appointed Bishop of London and Windsor and Julian Fantino was hired
            as London Chief of Police. And this is why we might confidently say
            that our success has been unequalled, unparalleled and
            unprecedented.
          </p>

          <p>
            And this, Ladies and Gentlemen, is the reason why we like to call
            London, Ontario, the Forest City, our home.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}

function Section({ title, children }) {
  return (
    <section className="mb-10">
      <h3
        className="text-2xl font-bold mb-5"
        style={{
          fontFamily: "Playfair Display, serif",
          color: "#432616",
        }}
      >
        {title}
      </h3>

      <div
        className="p-5"
        style={{
          border: "1px solid #bbaf9e",
          borderRadius: "2px",
          backgroundColor: "rgba(255,255,255,0.3)",
        }}
      >
        {children}
      </div>
    </section>
  );
}

function Person({ name, details }) {
  return (
    <div className="mb-6 last:mb-0">
      <h4
        className="font-bold mb-2"
        style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "1.1rem",
          color: "#432616",
        }}
      >
        {name}
      </h4>

      <ul
        className="list-disc pl-6 space-y-1"
        style={{
          fontFamily: "Crimson Text, serif",
          fontSize: "1rem",
          color: "#432616",
          lineHeight: "1.6",
        }}
      >
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
}
