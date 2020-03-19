import React from "react";

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
        {contacts.map(contact => (
          <div>
            <span class="text-secondary">{contact[0]} :</span> {contact[1]}
          </div>
        ))}
        {/* <div>
          <span class="text-secondary">Email :</span> baptiste@demontangon.fr
        </div>
        <div>
          <span class="text-secondary">Phone :</span> (+33)0678568958
        </div>
        <div>
          <span class="text-secondary">Address :</span> 16 Avenue du colonel
          Bonnet, 75016 Paris
        </div> */}
      </div>
    </main>
  );
}
