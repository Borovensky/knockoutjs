// ............. Countries List ............. //

var countries

$.get("/countries/countriesEng.json", function(data) { 
    countries = data;       
})

$(document).ready(function() {

    var countriesListViewModel = function(countries) {

        var self = this;

        this.addedCountries = ko.observableArray();


        this.countriesList = ko.observableArray(countries),

        this.inputValue = ko.observable(''),


        this.addCountry = function() {
            if(this.inputValue() !== ''){
                
                this.addedCountries.push({
                    id: this.addedCountries.length,
                    country: this.inputValue()    
                });
                    
                this.inputValue('');
                
            }
        }

        this.removeCountry = function(country, event) {
            
            var countryIndex = self.getIndexById(country.id, self.addedCountries);

            if(typeof countryIndex !== 'undefined') {
                self.addedCountries.splice(countryIndex, 1);
            }

        };


        this.getIndexById = function(index, addedCountries) {
            var index;

            for (var i = 0, max = addedCountries.length; i < max; i++) {
                if(addedCountries[i].id === id) {
                    index = i;
                    break;
                }
            }

            return index;
        };
        
    }

    ko.applyBindings(new countriesListViewModel(countries), document.getElementById('countrySearch'))

});