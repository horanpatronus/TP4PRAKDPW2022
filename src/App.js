// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Table } from 'react-bootstrap';

function App() {

  const [tabel, setTabel] = useState(false);
  const [nama, setNama] = useState('');
  const [tglLahir, setTglLahir] = useState('');
  const [jenisKelamin, setJenisKelamin] = useState('');
  const [userinfo, setUserInfo] = useState({
    hobi: [],
    response: [],
  });
  const [agama, setAgama] = useState('');
  const [pesan, setPesan] = useState('');
  
  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { hobi } = userinfo;
      
    console.log(`${value} is ${checked}`);
     
    // Case 1 : The user checks the box
    if (checked) {
      setUserInfo({
        hobi: [...hobi, value],
        response: [...hobi, value],
      });
    }
  
    else {
      setUserInfo({
        hobi: hobi.filter((e) => e !== value),
        response: hobi.filter((e) => e !== value),
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    
  <div className='container'>
    
    <form onSubmit={handleSubmit}>
    
      <div className="header text-center p-3 mt-3">
          <h1>Biodata</h1>
      </div>

        <div className="card-body text-start" >
          <div className="mb-3">
            <label hmtlFor="inputNama" className="form-label mb-1">Nama Lengkap</label>
            <input type="text" className="form-control" name='inputNama' id="inputNama" onChange={ event => setNama(event.target.value)}></input>
          </div>

          <div className="mb-3">
            <label hmtlFor="inputTglLahir" className="form-label mb-1">Tanggal Lahir</label>
            <input type="date" className="form-control" id="inputTglLahir"  onChange={ event => setTglLahir(event.target.value)}></input>
          </div>

          <div className="jenis-kelamin">
            <div className="mb-2 jenis-kelamin">
              <label hmtlFor="JenisKelamin" className="form-label mb-0">Jenis Kelamin</label>
            </div>
            <div className="form-check form-check-inline mb-3">
              <input className="form-check-input" type="radio" name="inputJenisKelamin" value="Laki-laki" onChange={ event => setJenisKelamin(event.target.value)}></input>
              <label className="form-check-label" hmtlFor="laki-laki">Laki-laki</label>
            </div>
            <div className="form-check form-check-inline mb-3">
              <input className="form-check-input" type="radio" name="inputJenisKelamin" value="Perempuan" onChange={ event => setJenisKelamin(event.target.value)}></input>
              <label className="form-check-label" hmtlFor="perempuan">Perempuan</label>
            </div>
            <div className="form-check form-check-inline mb-3">
              <input className="form-check-input" type="radio" name="inputJenisKelamin" value="Other" onChange={ event => setJenisKelamin(event.target.value)}></input>
              <label className="form-check-label" hmtlFor="other">Other</label>
            </div>
          </div>

          <div className="hobi">
            <div className="mb-2 hobi">
              <label hmtlFor="inputHobi" className="form-label mb-0">Hobi</label>
            </div>
              <div className="form-check form-check-inline mb-3">
                <input className="form-check-input" type="checkbox" name="inputHobi" value="Ngoding, " onChange={ handleChange }></input>
                <label className="form-check-label" hmtlFor="inlineCheckbox1">Ngoding</label>
              </div>
              <div className="form-check form-check-inline mb-3">
                <input className="form-check-input" type="checkbox" name="inputHobi" value="Rebahan, " onChange={ handleChange }></input>
                <label className="form-check-label" hmtlFor="inlineCheckbox2">Rebahan</label>
              </div>
              <div className="form-check form-check-inline mb-3">
                <input className="form-check-input" type="checkbox" name="inputHobi" value="Melamun, " onChange={ handleChange }></input>
                <label className="form-check-label" hmtlFor="inlineCheckbox3">Melamun</label>
              </div>
              <div className="form-check form-check-inline mb-3">
                <input className="form-check-input" type="checkbox" name="inputHobi" value="Baca Buku, " onChange={ handleChange }></input>
                <label className="form-check-label" hmtlFor="inlineCheckbox4">Baca Buku</label>
              </div>
              <div className="form-check form-check-inline mb-3">
                <input className="form-check-input" type="checkbox" name="inputHobi" value="Nonton YouTube, " onChange={ handleChange }></input>
                <label className="form-check-label" hmtlFor="inlineCheckbox3">Nonton YouTube</label>
              </div>
              <div className="form-check form-check-inline mb-3">
                <input className="form-check-input" type="checkbox" name="inputHobi" value="Dengerin Lagu, " onChange={ handleChange }></input>
                <label className="form-check-label" hmtlFor="inlineCheckbox3">Dengerin Lagu</label>
              </div>
              <div className="form-check form-check-inline mb-3">
                <input className="form-check-input" type="checkbox" name="inputHobi" value="Other" onChange={ handleChange }></input>
                <label className="form-check-label" hmtlFor="inlineCheckbox3">Other</label>
              </div>
          </div>
      
          <div className="mb-0">
            <label hmtlFor="inputAgama" className="form-label mb-1">Agama</label>
          </div>
          <div className="mb-3">
            <select id="inputAgama" className="form-select" onChange={ event => setAgama(event.target.value) }>
              <option value="Budha" selected>Budha</option>
              <option value="Hindu">Hindu</option>
              <option value="Islam">Islam</option>
              <option value="Katolik">Katolik</option>
              <option value="Tao">Tao</option>
              <option value="Protestan">Protestan</option>
              <option value="Konghucu">Konghucu</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="mb-3">
            <label hmtlFor="inputPesan" className="form-label mb-1">Pesan</label>
            <textarea className="form-control" id="inputPesan" rows="5" onChange={ event => setPesan(event.target.value) }></textarea>
          </div>

          <div className="mb-3">
            <button type="submit" className="btn btn-primary" id="btn-sbmt" value="submit" onClick={ () => setTabel(prev => !prev) }>Submit</button>
          </div>
        </div>

        <div className="hasil mb-3" id="show-data">
          <div className="hasil-body">
            {' '}
            {tabel && 
              <Table responsive>
                <tbody>
                  <tr>
                    <th scope="col-4">Label</th>
                    <th scope="col-4">Value</th>
                  </tr>
                  <tr>
                    <th>Nama</th><td>{ nama }</td>
                  </tr>
                  <tr>
                    <th>Tanggal Lahir</th><td>{ tglLahir }</td>
                  </tr>
                  <tr>
                    <th>Jenis Kelamin</th><td>{ jenisKelamin }</td>
                  </tr>
                  <tr>
                    <th>Hobi</th><td>{ userinfo.response }</td>
                  </tr>
                  <tr>
                    <th>Agama</th><td>{ agama }</td>
                  </tr>
                  <tr>
                    <th>Pesan</th><td>{ pesan }</td>
                  </tr>
                </tbody>
              </Table>
            }
          </div>
        </div>
      </form>        
    </div>
  );
}

export default App;
