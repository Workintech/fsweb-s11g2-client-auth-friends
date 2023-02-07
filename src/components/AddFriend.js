import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function AddFriend() {
    let loggedInToken = localStorage.getItem("s11g2etut");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onChange" });
    const history = useHistory();
    const onSubmitLogin = (data) => {
        const config = {
            method: "post",
            url: "http://localhost:9005/api/friends",
            headers: {
                "Content-Type": "application/json",
                Authorization: loggedInToken,
            },
            data: JSON.stringify(data),
        };
        axios(config)
            .then(function (response) {
                history.push("/friends-list");
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <div>
            <h1>Add Friend</h1>
            <form onSubmit={handleSubmit(onSubmitLogin)}>
                <div>
                    <input
                        type="text"
                        placeholder="name"
                        {...register("name", { required: "Bu alan zorunludur." })}
                    />
                </div>
                <div>
                    <input
                        type="email"
                        placeholder="email"
                        {...register("email", { required: "Bu alan zorunludur." })}
                    />
                </div>
                <button type="submit">Add Friend</button>
            </form>
        </div>
    )
}