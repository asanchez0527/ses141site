let twhPerPerson = 3342571.42857 / Math.pow(10,12)

$(() => {
    $("#worldPop").on('DOMSubtreeModified', () => {
        let persons = parseInt($("#worldPop").text().replace(/,/g, ''))
        let twh = persons * twhPerPerson
        $("#twhPerPerson").text(`Total energy usage ≈ ${ twh } TWh`)
    })
})
