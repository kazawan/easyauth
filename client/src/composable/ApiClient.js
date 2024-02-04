

const fetchurl = "http://localhost:3000/";
const option = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default  function ApiClient(){
  const authFetch = async (fnname, query) => {
    const res = await fetch(fetchurl + "auth", {
      ...option,
      body: JSON.stringify({ fn: fnname, query }),
    }).then((res) => res.json());
    return res;
  };

  const apiFetch = async (fnname, query) => {
    const res = await fetch(fetchurl + "api", {
      ...option,
      body: JSON.stringify({ fn: fnname, query }),
    }).then((res) => res.json());
    return res;
  };
  

  /**
   * @name EasyAuth 登陆接口
   * @param {object} data //一个对象
   * @param {string} data.email //邮箱
   * @param {string} data.password //密码
   * @param {string} data.name //用户名
   * 
   * @returns 
   */
  const SignUp = async (data) => {
    const fnname = 'SignUp'
    const query = {
      data:{
        ...data
      }
    }
    const res = await fetch(fetchurl + "auth", {
      ...option,
      body: JSON.stringify({ fn: fnname, query }),
    }).then((res) => res.json());
    return res;
  }

  const LogIn = async (data) => {
    const fnname = 'LogIn'
    const query = {
      
    }
    const res = await fetch(fetchurl + "auth", {
      ...option,
      body: JSON.stringify({ fn: fnname, query }),
    }).then((res) => res.json());
    return res;
  }

  return {authFetch, apiFetch,SignUp}
}
