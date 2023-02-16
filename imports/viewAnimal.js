// import * as bootstrap from 'bootstrap'

Template.viewAnimal.helpers({
    AnimalArray() {
        return Animaldb.find()
    }
})


Template.viewAnimal.events({ 
'click.js-edit'(){
    document.querySelector(".editID").value = this._id
    document.querySelector('#viewAnimal').src = this.profile
    document.querySelector('#viewName').innerHTML = `${this.Animal}`
    document.querySelector('#viewSpecies').innerHTML = this.Species
    document.querySelector('#viewDescription ').innerHTML = `Description : ${this.Description }`
    $('#viewModal').modal('show')

},




   'click .js-delete'() {
    
    
        
        console.debug("deleting", this._id)
        Animaldb.remove({ "_id": this._id })
    }
})


