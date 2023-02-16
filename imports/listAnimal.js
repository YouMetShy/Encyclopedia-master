import * as bootstrap from 'bootstrap'

Template.listAnimal.helpers({
    AnimalArray() {
        return Animaldb.find()
    }
})

Template.listAnimal.events({
    'click .js-view'() {
        let that = this
        const viewModal = new bootstrap.Modal('#viewModal', {})
     
        document.querySelector('#viewAnimal').src = that.profile
        document.querySelector('#viewName').innerHTML = `${that.Animal}`
        document.querySelector('#viewSpecies').innerHTML = that.Species
        document.querySelector('#viewDescription ').innerHTML = `Description : ${that.Description }`
        viewModal.show()
    },
    'click .js-delete'() {
        let that = this
        console.debug("deleting", that._id)
        Animaldb.remove({ "_id": that._id })
    }
})