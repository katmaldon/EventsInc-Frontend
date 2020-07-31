// import React from 'react'
// import { Button, Divider, Form, Grid, Segment, Checkbox } from 'semantic-ui-react'

// const Login = () => (
//     <Segment placeholder>
//         <Grid columns={2} relaxed='very' stackable>
//             <Grid.Column>
//                 <Form>
//                     <Form.Input
//                         icon='user'
//                         iconPosition='left'
//                         label='Username'
//                         placeholder='Username'
//                     />
//                     <Form.Input
//                         icon='lock'
//                         iconPosition='left'
//                         label='Password'
//                         type='password'
//                     />
//                     <Form.Field>
//                         <Checkbox label='Remember Me' />
//                     </Form.Field>
//                     <Button content='Login' primary />
//                 </Form>
//             </Grid.Column>
//             <Divider vertical>Don't have an account?Please</Divider>
//             <Grid.Column verticalAlign='middle'>
//                 <Button content='Sign up' icon='signup' size='big'/>
//             </Grid.Column>
//         </Grid>

//     </Segment>
// )

// export default Login

import React from 'react'
// import SignUp from './SignUp'
import { Button, Form, Grid, Header, Image, Message, Segment, Checkbox } from 'semantic-ui-react'

const LoginForm = () => (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
                <Image src='/logo.png' /> Log-in to your account
      </Header>
            <Form size='large'>
                <Segment stacked>
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                    />
                    <Form.Field>
                        <Checkbox label='Remember Me' />
                     </Form.Field>
                    <Button color='teal' fluid size='large'>
                        Login
          </Button>
                </Segment>
            </Form>
            <Message>
                New to us? <a href='<SignUp />'>Sign Up</a>
            </Message>
        </Grid.Column>
    </Grid>
)

export default LoginForm