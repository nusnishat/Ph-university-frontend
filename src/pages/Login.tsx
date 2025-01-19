import { Button, Row } from "antd";
import { FieldValues} from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";

const Login = () => {
    const [login] = useLoginMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const defaultValues = {
        userId: 'A-0001',
        password: 'admin123'
    }
    
    const onSubmit = async (data: FieldValues) =>{
       const toastId = toast.loading('loading...');
       try{
        const userInfo = {
            id: data.userId,
            password: data.password
        };
        const res = await login(userInfo).unwrap();
        const user = res?.data.user
        console.log(userInfo)
        dispatch(setUser({user: {user}, token: res?.data?.accessToken}));
        toast.success('logged in', {id: toastId, duration:2000});
        navigate(`/${user.role}/dashboard`);
       }catch(error){
        toast.warning('something went wrong', {id: toastId, duration:2000})
       }

    }
    return (
    <Row justify="center" align="middle" style={{ height: '100vh' }}>
        <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
            <PHInput type="text" name="userId" label="ID:" />
            <PHInput type="text" name="password" label="Password" />
            <Button htmlType="submit">Login</Button>
        </PHForm>
    </Row>
    );
};

export default Login;