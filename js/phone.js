const loadPhone = async(searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones)
}


const displayPhones = phones => {
    // console.log(phones);

    const phoneContainer = document.getElementById('phone-container');
    
    // clear phone container cards before adding new cards
    phoneContainer.textContent = '';

    const showAllContainer = document.getElementById('show-all-container');
    // display show all button if there are more than 12 phones
    if(phones.length > 12) {
        showAllContainer.classList.remove('hidden');
    } else showAllContainer.classList.add('hidden');

    // display only first 12 phones
    phones = phones.slice(0, 12);

    phones.forEach(phone => {
        console.log(phone);
        // step-2: create a div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100 p-4 shadow-sm`;

        // step-3: set innerHtml
        phoneCard.innerHTML = `
            <figure>
    <img
      src="${phone.image}" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${phone.phone_name}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
        `;

        // step-4: append child
    phoneContainer.appendChild(phoneCard)
    });
}


// Handle Search button
const handleSearch = () => {
    const SearchField = document.getElementById('search-field');
    const searchText = SearchField.value;
    console.log(searchText);
    loadPhone(searchText);
}

// loadPhone()