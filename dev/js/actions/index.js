export function setAppLevelStateForAccount(data)
{
  return(
  {
    type:'ACCOUNT_ACTION',
    payload:data
  });
}

export function setAppLevelStateForSocial(data)
{
  return(
  {
    type:'SOCIAL_ACTION',
    payload:data
  });
}

export function setAppLevelStateForPersonal(data)
{
  return(
  {
    type:'PERSONAL_ACTION',
    payload:data
  });
}
