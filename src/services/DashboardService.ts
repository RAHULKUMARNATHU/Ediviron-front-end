import { HttpClient } from "../helpers/httpClient";

const PATH = {
  totalCollection: "invoice/total/paid",
  totalStudent: "student/count",
  monthlyCollection: "invoice/collection",
  paymentModes : "/transaction",
  getCurrentMonthCollection :'/invoice/total/paid/month'
};

const getTotalCollection = async () => {
  try {
    return await HttpClient.get(PATH.totalCollection);
  } catch (error) {
    console.debug(error);
    return { data: null, error };
  }
};

const getTotalStudent = async () => {
  try {
    return await HttpClient.get(PATH.totalStudent);
  } catch (error) {
    console.debug(error);
    return { data: null, error };
  }
};

const getMonthlyCollection = async () => {
  try {
    return await HttpClient.get(
      `${PATH.monthlyCollection}/${new Date().getFullYear()}`
    );
  } catch (error) {
    console.debug(error);
    return { data: null, error };
  }
};

const getAllPaymentModes = async () => {
  try{
    return await HttpClient.get(PATH.paymentModes
    )
  }catch(err){
    console.debug(err)
    return {data : null , err}
  }
}

const collectOfCurrentMonth = async () => {
  try {
    return await HttpClient.get(PATH.getCurrentMonthCollection);
  } catch (err) {
    console.debug(err);
    return { data: null, err };
  }
};

export const DashboardService = {
  getTotalCollection,
  getTotalStudent,
  getMonthlyCollection,
  getAllPaymentModes,
  collectOfCurrentMonth,
};
