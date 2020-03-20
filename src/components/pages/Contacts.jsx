import React from "react";

//since all the contact info will have the same html, I created an array
//so if I want to add like a github, a Twitter or anything
//I just add it to this array
//and if I want to modify the alements its in one place
const contacts = [
  ["Email", "baptiste@demontangon.fr"],
  ["Phone", "(+33)0678568958"],
  ["Address", "16 Avenue du colonel Bonnet, 75016 Paris"]
];

export default function Contacts() {
  return (
    <main id="contact">
      <h1 class="lg-heading">
        Contact<span class="text-secondary"> Me</span>
      </h1>
      <h2 class="sm-heading">Here is how you can reach me :</h2>
      <div class="boxes">
        {/* just mapping the contact array */}
        {contacts.map(contact => (
          <div>
            <span class="text-secondary">{contact[0]} :</span> {contact[1]}
          </div>
        ))}
      </div>
    </main>
  );
}
