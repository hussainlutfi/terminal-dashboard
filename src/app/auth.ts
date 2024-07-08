import Swal from "sweetalert2";
import { createClient } from "../../utils/supabase/client";
import { LoginData } from "./../../interfaces/auth";

const supabase = createClient();

export async function isLogin() {
  const { data, error } = await supabase.auth.getUser();
  if (data) {
    return true;
  }
  return false;
}

export async function Login(params: LoginData) {
  const { data, error } = await supabase.auth.signInWithPassword(params);
  if (error) {
    return false;
  }

  return true;
}
