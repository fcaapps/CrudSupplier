import { http } from './config'

export default	{

	salvar:(supplier)=>{
		return http.post('supplier',supplier);
  },
    
	atualizar:(supplier)=>{
		return http.put('supplier',supplier);
  },

  listar:()=>{
		return http.get('supplier')
  },
    
	apagar:(supplier)=>{
		return http.delete('supplier', { data: supplier })
	}
}