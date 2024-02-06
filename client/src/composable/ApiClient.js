import { ref } from "vue";
import { useRouter } from "vue-router";


const fetchurl = "http://localhost:3000/";
const option = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const user = ref(null)

export default function ApiClient() {
  // const authFetch = async (fnname, query) => {
  //   const res = await fetch(fetchurl + "auth", {
  //     ...option,
  //     body: JSON.stringify({ fn: fnname, query }),
  //   }).then((res) => res.json());
  //   return res;
  // };
  const router = useRouter();


  const auth = new function () {
    /**
     * @param {Object} userinfo
     * @结构  {username,password,email}
     * @param {string} userinfo.username //用户名
     * @param {string} userinfo.password //密码
     * @param {string} userinfo.email //邮箱
     * 
     * @returns 
     */
    this.SignUp = async (userinfo) => {
      const query = {
        data: {
          ...userinfo
        }
      }
      const res = await fetch(fetchurl + "auth", {
        ...option,
        body: JSON.stringify({ fn: "SignUp", query }),
      }).then((res) => res.json());
      return res;
    };


    this.Login = async (logininfo) => {
      const query = {
        ...logininfo
      }
      const res = await fetch(fetchurl + "auth", {
        ...option,
        body: JSON.stringify({ fn: "userLogin", query }),
      }).then((res) => res.json());
      if (res.code === 200) {
      router.push('/');
        
      }
      if (res.code === 500) {
        alert(res.msg)
        return
      }
      return res
    };




    this.Logout = async () => {
      localStorage.removeItem("userinfo");
      console.log(!!user.value)
      router.push('/login');
      user.value = null;
      return
    };
  }


  const isLoggedIn = () => {
    return !!user.value;
  };

  const api = async(fnname, query) => {
    const res =  fetch(fetchurl + "api", {
      ...option,
      body: JSON.stringify({ fn: fnname, query }),
    }).then((res) => res.json());
    return res;
  }
 

  return {
    user,
    auth,
    api,
    isLoggedIn
  }
}


