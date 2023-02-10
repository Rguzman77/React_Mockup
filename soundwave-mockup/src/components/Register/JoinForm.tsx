import JoinButton from '../Elements/JoinButton'
import { StyledForm } from './JoinFormStyle'

type Props = {}

const JoinForm = (props: Props) => {
    return (
        <StyledForm>
            <div>
                <p>Name:</p>
                <input type="text" className="name-input" />
            </div>
            <div>
                <p>Email:</p>
                <input type="text" className="email-input" />
            </div>
            <div>
                <p>Password:</p>
                <input type="text" className="password-input" />
            </div>
            <JoinButton/>
        </StyledForm>
      )
}

export default JoinForm