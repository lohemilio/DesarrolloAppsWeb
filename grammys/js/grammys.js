$.ajax({
    url : 'https://raw.githubusercontent.com/lohemilio/DesarrolloAppsWeb/master/grammys/data/grammys.json',
    type : 'GET',
    dataType : 'json',
    success : function(data) {
        console.log(data);
      let newHtml = ''
  
      for( let i = 0; i < data.length; i++ ) {
        newHtml += `
          <option value="${data[i].field_id}">
            ${data[i].field}
          </option>
        `
      }
      $('#category_types').append(newHtml)
      loadCategoriesJSON()
    },
    error : function(errorMsg) {
      console.log(errorMsg)
    }
  })

  function loadCategoriesJSON() {
    $.ajax({
      url : 'https://raw.githubusercontent.com/lohemilio/DesarrolloAppsWeb/master/grammys/data/grammys.json',
      type : 'GET',
      dataType : 'json',
      success : function(data) {
        let newHtml = ''
        $('#category_types').on('change', function(event) {
          let id = $(this).val()
  
          for( let i = 0; i < data.length; i++ ) {
            if ( id == data[i].field_id ) {
              $('#field').text(data[i].field)
              $('#description').text(data[i].description)
              for( let j = 0; j < data[i].categories.length; j++ ) {
                newHtml += `
                  <h3>
                    ${data[i].categories[j].category_name}
                  </h3>
                `

                for(let k = 0;k < data[i].categories[j].nominees.length;k++){

                    newHtml+=`
                    <ul>
                        <li><span>
                        ${data[i].categories[j].nominees[k].nominee}
                        </span></li>
                        <p>${data[i].categories[j].nominees[k].artist}</p>
                        <p>${data[i].categories[j].nominees[k].info}</p>
                    </ul>
                    `
                }
              }
              $('#nominees_section').append(newHtml)

              
            }
          }
        })
      },
      error : function(errorMsg) {
        console.log(errorMsg)
      }
    })
  }
  