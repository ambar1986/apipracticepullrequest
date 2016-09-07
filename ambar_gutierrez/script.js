//https://www.rijksmuseum.nl/api/pages/en/rijksstudio/artists/rembrandt-harmensz-van-rijn?key=ooFfePZl&format=json

$("button").on("click", function(){
  var rooturl = "https://www.rijksmuseum.nl/api/pages/en/"//first part of the link
  var slug = "rijksstudio/artists/"
  var key = '?key=ooFfePZl&format=json'
  var input = $("input").val().split(" ").join("-").toLowerCase()
  console.log(input)
  $.ajax({ 
    url: rooturl+ slug+ input+ key, 
    success: function(data){
      var art = data.contentPage.artObjectSet
      for(var i = 0; i < art.length; i++){
        getImages(art[i])
      }
  
    },
    error: function(data){
      $('ul').append('<li>Artists not found</li>')
    },
  })
})


function getImages(str){
  var rooturl = "https://www.rijksmuseum.nl/api/en/collection/"
  var input = str + "/tiles"
  var key = '?key=ooFfePZl&format=json'
  $.ajax({
    url: rooturl + input + key,
    success: function(data){
      
      var data = JSON.parse(data)
      var images = data.levels[data.levels.length-1].tiles[0].url
      $('ul').append('<li><img src="' + images + '"></li>')
    },
    })
  }






