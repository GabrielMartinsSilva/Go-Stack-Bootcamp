//configuração de uploads de arquivos
import multer from 'multer'; // trabalho com extensão de imagens mult=platarform
import crypto from 'crypto'; //gera caracteres aleatórios
import { extname, resolve} from 'path'; // bibilioteca do node para gerar paths das aplicações




//exportação da configuração
export default {
  // storage : como será armazenado os arquivos, no caso dentro da pasta uploads
  storage: multer.diskStorage({
    // destination : destino dos arquivos
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, res)=>{
        if (err) return cb(err);
        //recebe null pois o primeiro parametro do cb é o erro
        return cb(null, res.toString('hex') + extname(file.originalname));
      })
    },
  }),
};
