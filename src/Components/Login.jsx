import React from 'react'
import { Button, Divider, Form, Grid, Segment, Checkbox } from 'semantic-ui-react'

const Login = () => (
    <Segment placeholder>
        <Grid columns={2} relaxed='very' stackable>
            <Grid.Column>
                <Form>
                    <Form.Input
                        icon='user'
                        iconPosition='left'
                        label='Username'
                        placeholder='Username'
                    />
                    <Form.Input
                        icon='lock'
                        iconPosition='left'
                        label='Password'
                        type='password'
                    />
                    <Form.Field>
                        <Checkbox label='Remember Me' />
                    </Form.Field>
                    <Button content='Login' primary />
                </Form>
            </Grid.Column>
            <Divider vertical>Don't have an account?Please</Divider>
            <Grid.Column verticalAlign='middle'>
                <Button content='Sign up' icon='signup' size='big'/>
            </Grid.Column>
        </Grid>

    </Segment>
)

export default Login