(()=> {
  $(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideDown("slow");
    });
  });
  
    const waypoint1 = new Waypoint({
            element: document.getElementById('1'),
          
            handler: function(direction) {
              console.log('Scrolled to waypoint!')
              let url = `/svgdata/${this.element.id}`

              fetch(url)
                  .then(res => res.json())
                  .then(data => {
                    this.element.innerHTML += `
                    <p>${data.description}</p>`
                  })
                  .catch((err) => console.log(err));

                  this.destroy()

            }
          })

         
          
          const waypoint2 = new Waypoint({
            element: document.getElementById('2'),
            handler: function(direction) {
              console.log('Scrolled to waypoint!')
              let url = `/svgdata/${this.element.id}`

              fetch(url)
                  .then(res => res.json())
                  .then(data => {
                    this.element.innerHTML += `
                    <p>${data.description}</p>`
                    
                  })
                  .catch((err) => console.log(err));

                  this.destroy()
            }
          })

                  const waypoint3 = new Waypoint({
                    element: document.getElementById('3'),
                    handler: function(direction) {
                      console.log('Scrolled to waypoint!')
                      let url = `/svgdata/${this.element.id}`
        
                      fetch(url)
                          .then(res => res.json())
                          .then(data => {
                            this.element.innerHTML += `
                            <p>${data.description}</p>`
                            
                          })
                          .catch((err) => console.log(err));
        
                          this.destroy()
            }
          })

          const waypoint4 = new Waypoint({
            element: document.getElementById('4'),
            handler: function(direction) {
              console.log('Scrolled to waypoint!')
              let url = `/svgdata/${this.element.id}`

              fetch(url)
                  .then(res => res.json())
                  .then(data => {
                    this.element.innerHTML += `
                    <p>${data.description}</p>`
                    
                  })
                  .catch((err) => console.log(err));

                  this.destroy()
    }
  })

  const waypoint5 = new Waypoint({
    element: document.getElementById('5'),
    handler: function(direction) {
      console.log('Scrolled to waypoint!')
      let url = `/svgdata/${this.element.id}`

      fetch(url)
          .then(res => res.json())
          .then(data => {
            this.element.innerHTML += `
            <p>${data.description}</p>`
            
          })
          .catch((err) => console.log(err));

          this.destroy()
}
})
          

          
    
})();