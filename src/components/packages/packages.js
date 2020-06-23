const bronze = {
  name: "Bronze",
  description: "A simple maintenance wash for the interior & exterior",
  interior: ["vacuum", "wiped down"],
  exterior: ["hand washed", "wheels cleaned", "windows cleaned"],
  intProtection: [],
  extProtection: [],
  alaPrice: 80,
  bgColor: "rgba(176,141,87,0.5)",
};

const silver = {
  name: "Silver",
  description: "A light cleaning for the interior & exterior with a 6 month spray ceramic sealant",
  interior: ["vacuum", "plastic trim wiped down"],
  exterior: ["hand washed", "wheels & tires cleaned", "tire dressing applied", "windows cleaned"],
  intProtection: [],
  extProtection: [
    "6 month UV protection coating",
    "high gloss",
    "water beading and sheeting to help prevent water spotting",
  ],
  alaPrice: 120,
  bgColor: "rgba(170,169,173,0.5)",
};

const gold = {
  name: "Gold",
  description:
    "A deep interior & exterior cleaning with a little protection for the paint and windows.",
  interior: [
    "vacuum",
    "plastic trim soaped & scrubbed",
    "stain removal",
    "leather cleaned & reconditioned",
    "windows int & ext",
  ],
  exterior: [
    "hand washed",
    "exterior trim dressing applied",
    "windows clay barred",
    "wheels, wheel wells, & tires cleaned",
    "tire dressing applied",
  ],
  intProtection: [],
  extProtection: [
    "2 coats of spray sealant for 6 months of extreme UV protection",
    "extreme high gloss",
    "extreme water beading and sheeting to help prevent water spotting",
  ],
  alaPrice: 150,
  bgColor: "rgba(212,175,55,0.5)",
};

const platinum = {
  name: "Platinum",
  description:
    "A good washing and decontamination of interior & exterior with short term protection treatments",
  interior: [
    "vacuum",
    "plastic trim soaped & scrubbed",
    "stain removal",
    "leather cleaned & reconditioned",
    "windows int & ext",
  ],
  exterior: [
    "hand washed",
    "clay barred",
    "chemically decontaminated",
    "windows int & ext",
    "wheels, wheel wells & tires",
  ],
  intProtection: ["trim revival application", "leather conditioning application"],
  extProtection: [
    "2 coats of spray sealant for 6 months of extreme UV protection",
    "extreme high gloss",
    "extreme water beading and sheeting to help prevent water spotting",
    "Trim is dressed to bring back the black look",
    "Windows are coated to help with water beading for 6 months.",
  ],
  alaPrice: 180,
  bgColor: "rgba(229,228,226,0.5)",
};

const diamond = {
  name: "Diamond",
  description:
    "A good route to restore some neglected paint and some decent protection to prevent damage in the near future. Interior is brought back to as new condition as possible",
  interior: [
    "vacuum",
    "plastic trim soaped & scrubbed",
    "stain removal",
    "leather cleaned & reconditioned",
    "windows int & ext",
  ],
  exterior: [
    "hand washed",
    "exterior trim dressing applied",
    "windows clay barred",
    "1-step polishing",
    "wheels, wheel wells, & tires cleaned",
    "tire dressing applied",
  ],
  intProtection: [
    "Trim is dressed",
    "Windows are coated for 6 months of protection",
    "Leather is conditioned to help prevent cracking in the future",
  ],
  extProtection: [
    "Paint is coated with 1-2 year coating for high gloss and swirl resistance",
    "Trim is restored with a 2 year coating for protection",
  ],
  alaPrice: 350,
  bgColor: "rgba(185,242,255,0.5)",
};

const supreme = {
  name: "Supreme",
  description: "The full treatment, everything is brought back to life and protected for years.",
  interior: [
    "vacuum",
    "plastic trim soaped & scrubbed",
    "stain removal",
    "leather cleaned & reconditioned",
    "windows int & ext",
  ],
  exterior: [
    "hand washed",
    "exterior trim dressing applied",
    "windows clay barred",
    "wheels, wheel wells, & tires cleaned",
    "tire dressing applied",
    "Headlights restored if needed",
  ],
  intProtection: [
    "Trim is dressed",
    "Windows are coated for 6 months of protection",
    "Leather is conditioned to help prevent cracking in the future",
  ],
  extProtection: [
    "Paint coated with 2 coats of ceramic coating for up to 5 years of high gloss, swirl resistance, water beading/sheeting and water spot resistance",
    "Trim is restored to black and coated for up to 2 years of protection and UV resistance.",
  ],
  alaPrice: 1400,
  bgColor: "rgba(255,198,185,0.5)",
};

module.exports = { bronze, silver, gold, platinum, diamond, supreme };
