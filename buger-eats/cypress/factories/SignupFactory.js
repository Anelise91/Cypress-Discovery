//constroi módulo e contendo método deliver
export default {
    deliver: function() {
        var data = {
            name: 'Anelise Maia',
            cpf: '00005555555',
            email: 'anelise@gmail.com',
            whatsapp: '21999999999',
            address: {
                postalcode: '04534011',
                street: 'Rua Joaquim Floriano',
                number: '1000',
                details: 'Ap 142',
                district: 'Itaim Bibi',
                city_state: 'São Paulo/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }
        return data
    }
}