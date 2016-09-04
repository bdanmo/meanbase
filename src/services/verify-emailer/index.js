function emailer(action, user, params, cb) {
  console.log(`-- Sending email for ${action}`);
  const provider = params.provider;
  const route = provider === 'rest' ? 'rest' : 'socket';

  switch (action) {
    case 'resend': // send another email with link for verifying user's email addr
      console.log(`Dear ${user.username}, please click this link to verify your email addr.`);
      console.log(`  http://localhost:3030/${route}/verify/${user.verifyToken}`);
      break;
    case 'verify': // inform that user's email is now confirmed
      break;
    case 'forgot': // send email with link for resetting forgotten password
      console.log(`Dear ${user.username}, please click this link to reset your password.`);
      console.log(`  http://localhost:3030/${route}/reset/${user.resetToken}`);
      break;
    case 'reset': // inform that forgotten password has now been reset
      break;
    default:
      break;
  }

  cb(null);
}
