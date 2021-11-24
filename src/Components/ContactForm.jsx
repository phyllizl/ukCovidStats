import BasicForm from './Form'
import { Form, Field } from 'react-final-form'
import { makeStyles } from '@mui/styles'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: "50px"
    }
}))

const ContactForm = () => {
    const classes = useStyles()

    const onSubmit = () => alert('Your request has been submitted successfully!')
    const handleSubmit = () => alert('Your request has been submitted successfully!')

    return (
        <div className={classes.root}>
            <Form
                onSubmit={onSubmit}
            >
                {({handleSubmit}) => 
                    <form onSubmit={null}>
                        <Typography>First Name:</Typography>
                        <Field
                            component={BasicForm}
                            variant="outlined"
                            name="firstName"
                            label='First Name'
                            id="fname"
                            margin="dense"
                        /><br />
                        <Typography>Last Name:</Typography>
                        <Field
                            component={BasicForm}
                            variant="outlined"
                            name="lastName"
                            label='Last Name'
                            id="lname"
                            margin="dense"
                        />
                        <br />
                        <Typography>Email:</Typography>
                        <Field
                            component={BasicForm}
                            variant="outlined"
                            name="email"
                            label='email'
                            id="email"
                            margin="dense"
                        />
                        <br />
                        <Button type="submit">Submit</Button>
                    </form>
                }
            
            </Form>

        </div>
    )
}

export default ContactForm;