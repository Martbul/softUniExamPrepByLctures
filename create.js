export class CreateComponent{
    constructor(shoeService, renderHandler,templateFunction, router) {
        this.shoeService = shoeService;
        this.renderHandler = renderHandler;
        this.templateFunction = templateFunction;
        this.router = router;
        this.showView = this._showView.bind(this);
        this.createHandler = this._createHandler.bind(this);
    }

   async _showView(){
   
        let template = this.templateFunction(this.createHandler)
        this.renderHandler(template)
    }

    async _createHandler(e){
        e.preventDefault()

        let form = e.target
        let formData = new FormData(form);
  
        let shoe = {
            brand:formData.get('brand'),
            model:formData.get('model'),
            imageUrl:formData.get('imageUrl'),
            release:formData.get('release'),
            designer:formData.get('designer'),
            value:formData.get('value')
        }

        
  
        if(shoe.brand ==''|| shoe.model ==''|| shoe.imageUrl ==''|| shoe.release ==''||shoe.designer==''|| shoe.value==''){
          alert('All fields are required');
          return;
        }

        let result = await this.shoeService.create(shoe)
        this.router.navigate('/dashboard')
    }

}