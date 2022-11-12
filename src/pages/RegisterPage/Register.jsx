import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Autocomplete from '@mui/material/Autocomplete';
import CloseIcon from '@mui/icons-material/Close';

//axios services import
import { getAllCompaniesName, userRegister } from '../../services/axiosServices'

const Register = () => {
    const [open, setOpen] = useState(false);
    const [companies, setCompanies] = useState([])
    const [companyList, setCompanyList] = useState([])

    const [inputValue, setInputValue] = useState('')

    const [user, setUser] = useState({
        email: '',
        company: '',
        project: ''
    })

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleInputChange = (key) => (event) => {
        setUser((prev) => {
            return {
                ...prev,
                [key]: event.target.value
            }
        })
    }

    useEffect(() => {
        const response = getAllCompaniesName(setCompanies)
        // console.log(response)
    }, [])

    useEffect(() => {
        console.log(companies)
        companyMap()
    }, [companies])

    useEffect(() => {
        console.log(user)
    }, [user])


    const handleRegister = async (event) => {
        event.preventDefault();

        const response = await userRegister(user)
        if (response.status === 'registered') {
            alert('ususario registrado')
        }
        console.log(response)
            .catch(err => {
                console.log(response)
                setErrorRegister(true)
            })
    }

    const setFieldValue = (type, value) => {
        setValues((oldValues) => ({ ...oldValues, [type]: value }));
    };

    const companyMap = async () => {
        const companyName = await companies.map((company) => {
            return company.name
        })

        setCompanyList(companyName)
    }

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Agregar Usuarios
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <CloseIcon />
                <DialogTitle>Registrar Usuarios</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Elije una Empresa para enviar la invitacion
                    </DialogContentText>

                    <Autocomplete
                        disablePortal
                        id="company"
                        onChange={(event, newValue) => setUser(prev => ({ ...prev, company: newValue}))}
                        inputValue={inputValue}
                        onInputChange={(e, newInputValue) => {
                            setInputValue(newInputValue);
                        }}
                        isOptionEqualToValue={(option, value) => option === value}
                        options={companyList}
                        sx={{ width: 400 }}
                        value={user.company}
                        renderInput={(params) =>

                        <TextField
                        {...params}
                        id="company"
                        label="Empresas"
                        />
                    }
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        onChange={handleInputChange('email')}
                        label="Correo@mail.com"
                        sx={{ bgColor: 'var(--purple)' }}
                        type="email"
                        fullWidth
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        id="project"
                        onChange={handleInputChange('project')}
                        label="Ingresar Proyecto"
                        sx={{ bgColor: 'var(--purple)' }}
                        type="input"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleRegister}>Enviar Invitación</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default Register;