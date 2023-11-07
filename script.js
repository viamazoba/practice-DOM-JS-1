async function callInformation(){
    const partialUrl = "https://platzi-avo.vercel.app"

    const formatPrice = (price) =>{
        const newPrice = new window.Intl.NumberFormat("en-EN", {
            style: "currency",
            currency: "USD",
        }).format(price)

        return newPrice
    }
    const response = await fetch(`${partialUrl}/api/avo`)
    const { data } = await response.json()

    const cardsDos = data.map((avocado) =>{
        const image = document.createElement('img')
        const title = document.createElement('h3')
        const price = document.createElement('p')

        image.src = partialUrl + avocado.image
        image.className = "image"

        title.textContent = avocado.name
        title.className = "title"

        price.textContent = formatPrice(avocado.price)
        price.className = "price"

        const container = document.createElement('div')
        container.append(image, title, price)

        return container
        
    })

    document.body.append(...cardsDos)
}

callInformation();