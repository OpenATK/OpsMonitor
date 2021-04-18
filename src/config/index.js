const SCOPE = 'oada.yield:all';
const METADATA_OPENATK = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImRldjEiLCJqd2siOnsia3R5IjoiUlNBIiwibiI6InJyMzhpSzhGaTBfLUNSTFR2Vks0SUlDbGFyaWk2d1ZIcEU3elpQWG9FUmxfT29oNjRZbWJRY1JhNWVGdzBVUWhVdkVDaEt1OU5vM2ptN0xXOVpjTDFIS3Joa1VXLU9Rb2JPWFVuckNnb0NwYThWWWhfd1JJZFFZYnN2UFFWajVOR3V1TlhhWkJfX3B4Rnktbl9PMklNUzhPR3Jlem0zYlFIREFmLWpuZ0loWkdaZ0xhdkxKeVNIVXlEUUw0RmJRNkQzUXozQU1PcnhGdmE0S0JJUENRS0ZPbVlYVm40enRnVDY4aGd5TW9jMUt5dHhvUmd6VkhuQ2RUcFBXV1Zybk1GY0plZFlELUxtazBYbzVyallPeG1xOEExZWpmeFBNZVJfM1Y3OEFKazJMREk0dkdhSjNmbmFQWlM3Q3ZXOEYzcFdXaWpfQnlWR0NJLTVCcmtxSF9uUSIsImUiOiJBUUFCIn19.eyJyZWRpcmVjdF91cmlzIjpbImh0dHBzOi8vb3BlbmF0ay5jb20vRmllbGRXb3JrQXBwL29hdXRoMi9yZWRpcmVjdC5odG1sIiwiaHR0cHM6Ly9vcGVuYXRrLmNvbS9GaWVsZFdvcmtBcHAvb2F1dGgyL3JlZGlyZWN0LyIsImh0dHA6Ly9sb2NhbGhvc3Qvb2F1dGgyL3JlZGlyZWN0Lmh0bWwiLCJodHRwOi8vbG9jYWxob3N0L29hdXRoMi9yZWRpcmVjdC8iXSwidG9rZW5fZW5kcG9pbnRfYXV0aF9tZXRob2QiOiJ1cm46aWV0ZjpwYXJhbXM6b2F1dGg6Y2xpZW50LWFzc2VydGlvbi10eXBlOmp3dC1iZWFyZXIiLCJncmFudF90eXBlcyI6WyJhdXRob3JpemF0aW9uX2NvZGUiXSwicmVzcG9uc2VfdHlwZXMiOlsidG9rZW4iLCJjb2RlIiwiaWRfdG9rZW4iLCJpZF90b2tlbiB0b2tlbiIsImNvZGUgaWRfdG9rZW4iLCJjb2RlIHRva2VuIiwiY29kZSBpZF90b2tlbiB0b2tlbiJdLCJjbGllbnRfbmFtZSI6Ik9wZW5BVEsiLCJjbGllbnRfdXJpIjoiaHR0cDovL29wZW5hdGsuY29tIiwiY29udGFjdHMiOlsiU2FtIE5vZWwgPHNhbm9lbEBwdXJkdWUuZWR1PiJdLCJqd2tzIjp7ImtleXMiOlt7Imt0eSI6IlJTQSIsIm4iOiJ3ZWVmam51cjVxMTFQVHZzSTctMmlJUGRTeERJWGFva0tUWnk3OUR2dlNlWEFESFJnWXJCZW95bmFHN2NmaGttOGpkRzJ1NzV4Y2ozbUZweEVfVGs2a1AxTGR3TXZtaC11TXNuLVprb0REU3g0NkNOeGRiS2dyRFl3emZ2RElBU0RuZktwZ1FkX1RPLXQ0XzgyWjg5VmRnMFNGTzVOS2I4LS11NlN4c3dYU2NJckZGMkdzNDNrX1hqeEFOTEpqVzNMY0pRaG1GVmJWSjRpZHcyVXZNQXZwSVVhU3NZTHhaUXVNeTNxcEQzVGdWRmVmM3lBXy1jallVbUhRM09uTUM0Ym9JM24wVW1tSV8xcWtoaDJvMmFCTHhCUjZnakVIZG5DbTZZRldoOXV0NEFCcWN1X3ItZUdycVcxRHozdWVzdzY5UnZVazBVeldvc1BuMzVhVUZrQ1EiLCJlIjoiQVFBQiIsImtpZCI6IjYwZjZhYzNlYTY5MjRiNmJiZDBjZDVmYWQxMjg3ZDJiIn1dfSwic29mdHdhcmVfaWQiOiJhNzAzYmZkYy0zZmExLTQ5OWYtYjkwNS0xMWYwYjU0ZjM4MDciLCJyZWdpc3RyYXRpb25fcHJvdmlkZXIiOiJodHRwczovL2lkZW50aXR5Lm9hZGEtZGV2LmNvbSIsImlhdCI6MTUzMzg0NjExMn0.F0iwEhA2PNBVCEVRYbcbo1qTb01b8n1C3L_LtXmZT2APO5eLObMxt4PvAMaTR-5LPumG2uUHE9fthEK-NIbShgQVhWRMKEsXSYiZO4MhvYPAVjxuWT_ery7fsb1W2XK-a0AH-qBSEM5eBX3IYM2EatXobF3E87_xcMUVWSFFCj47QIm0TFU9x4o41P16prhRU3Y7jeG7VxQDiVvEhNo5qalyC6TgW961fzF0y6zG5BBs43UorRIWuUw27Du-8DBst3MsattRcqHX2JHLwRaacj4yAH_oGXjT64gOpkWzWQFi1AEtAm5-0IS_z3e4ULMuDrJDxL78iccQTloZFKvOlw';
const METADATA_LOCALHOST = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImRldjEiLCJqd2siOnsia3R5IjoiUlNBIiwibiI6InJyMzhpSzhGaTBfLUNSTFR2Vks0SUlDbGFyaWk2d1ZIcEU3elpQWG9FUmxfT29oNjRZbWJRY1JhNWVGdzBVUWhVdkVDaEt1OU5vM2ptN0xXOVpjTDFIS3Joa1VXLU9Rb2JPWFVuckNnb0NwYThWWWhfd1JJZFFZYnN2UFFWajVOR3V1TlhhWkJfX3B4Rnktbl9PMklNUzhPR3Jlem0zYlFIREFmLWpuZ0loWkdaZ0xhdkxKeVNIVXlEUUw0RmJRNkQzUXozQU1PcnhGdmE0S0JJUENRS0ZPbVlYVm40enRnVDY4aGd5TW9jMUt5dHhvUmd6VkhuQ2RUcFBXV1Zybk1GY0plZFlELUxtazBYbzVyallPeG1xOEExZWpmeFBNZVJfM1Y3OEFKazJMREk0dkdhSjNmbmFQWlM3Q3ZXOEYzcFdXaWpfQnlWR0NJLTVCcmtxSF9uUSIsImUiOiJBUUFCIn19.eyJyZWRpcmVjdF91cmlzIjpbImh0dHA6Ly92aXAzLmVjbi5wdXJkdWUuZWR1OjgwMDAvb2F1dGgyL3JlZGlyZWN0Lmh0bWwiLCJodHRwOi8vbG9jYWxob3N0OjgwMDAvb2F1dGgyL3JlZGlyZWN0Lmh0bWwiLCJodHRwOi8vbG9jYWxob3N0OjgwMDAvb2F1dGgyL3JlZGlyZWN0LyJdLCJ0b2tlbl9lbmRwb2ludF9hdXRoX21ldGhvZCI6InVybjppZXRmOnBhcmFtczpvYXV0aDpjbGllbnQtYXNzZXJ0aW9uLXR5cGU6and0LWJlYXJlciIsImdyYW50X3R5cGVzIjpbImltcGxpY2l0Il0sInJlc3BvbnNlX3R5cGVzIjpbInRva2VuIiwiaWRfdG9rZW4iLCJpZF90b2tlbiB0b2tlbiJdLCJjbGllbnRfbmFtZSI6Ik9wZW5BVEsiLCJjbGllbnRfdXJpIjoiaHR0cHM6Ly92aXAzLmVjbi5wdXJkdWUuZWR1IiwiY29udGFjdHMiOlsiU2FtIE5vZWwgPHNhbm9lbEBwdXJkdWUuZWR1PiJdLCJzb2Z0d2FyZV9pZCI6IjFmNzg0NzdmLTM1NDEtNDEzYi05N2I2LTg2NDRiNGFmNWJiOCIsInJlZ2lzdHJhdGlvbl9wcm92aWRlciI6Imh0dHBzOi8vaWRlbnRpdHkub2FkYS1kZXYuY29tIiwiaWF0IjoxNTEyMDA2NzYxLCJqd2tzIjp7ImtleXMiOlt7Imt0eSI6IlJTQSIsIm4iOiJ1VjdaV21ESjJ4anJjbXJROHhXbW9XVUtLNUFjX0Uyd3ZRVm9JOTRaSUxQcXFLS2VDSTJXOEZabzVTT2xhVDd6YUV3RUVHVHpvcEFrTVpiNVRkZHF6emJRY2JKeW5tbFBzVmNvSEtaazRjSVZiaklVVWIyUXh2aW44WUtaNTlmQW1lSFhEU2Y2cktzMUdRSzNWeFYxMmdTSzZDdk92clBLel9IdkFrNzBHblJxV2IxUjVMV0VqdzNpYUdBSU9wcVU4X3hkd3NZaVJ1bmt1dGR6bDNOeUtLbm5tV0lEX2VhTHZSODFJRHBvM1phR0VNM2FSaUF0c3Y0My1jS3hTLWdydFJoSHRtblNpT2ZSbkh1a1JlSjU4azEyTjdIVnlzR2k3d1BLc3lKbHltdjZzWDR4Y2FUekFXd3NDRDZHWThhSzJaV0dmRkFnN3BybVBUaVZMaUhqb1EiLCJlIjoiQVFBQiIsImtpZCI6IjVhNWU3ZDQ1MzU3MjRjNjk5Yzk0MGExZjEyMTJkMzU2In1dfX0.W43ow1Mk8pAIJZ0-S4feCSdJbhhEFXAFycBxtUwVaHGNELXa5AiQQdayRcSpZLeYhBULeEE2Kg6Ikb6eqyWrO3w4QUAEs88YYpc2ghUJwFLrI_1_69hyeNLo_dt2qSc1fbc4Bx9zEUsFh1he9sUq4SAjrbTnv6v_o513XFbsSjDq_qzC2QTKuQRPxxxCsTRvDvP_gkTLXPzzh_I0ATJIgBCoRxT1UNBNU6xnuXSrwS9NG-8k_B2mABNAwvWdYpqQBH1g5D7vWcaT-urZ0Pc_7ZjQv_zN407Gn_hgCcZ1TkNtjlM7jM2dv09Ckk0vANCjuv31o0JtRKjZdblIkdB_jQ';

const REDIRECT_OPENATK = 'https://openatk.com/FieldWorkApp/oauth2/redirect/';
const REDIRECT_LOCALHOST = 'http://localhost:8000/oauth2/redirect/';

let METADATA;
let REDIRECT;
let oadaDomain = '';
if (process.env.NODE_ENV !== 'production') {
  console.log('NODE_ENV = ', process.env.NODE_ENV);
  METADATA = METADATA_LOCALHOST;
  REDIRECT = REDIRECT_LOCALHOST;
  oadaDomain = 'https://localhost';
} else {
  METADATA = METADATA_OPENATK;
  REDIRECT = REDIRECT_OPENATK;
}

let OPTIONS = {
    redirect: REDIRECT,
    metadata: METADATA,
    scope: SCOPE
};

export default {
  OPTIONS,
  REDIRECT,
  METADATA,
  SCOPE,
  oadaDomain
}