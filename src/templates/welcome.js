const welcomeTemplate = (firstname, lastname) => `
  <!DOCTYPE html>
<html lang="en" xmlns="https://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="x-apple-disable-message-reformatting">
  <title></title>
  <!--[if mso]>
    <noscript>
        <xml>
            <o:OfficeDocumentSettings>
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
    </noscript>
    <![endif]-->
  <style>
    table,
    td,
    div,
    h1,
    p {
      font-family: SF Pro Display, sans-serif;
    }
  </style>
</head>

<body style="padding: 0; margin: 0; width: 100%">
  <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;">
    <tr>
      <td align="center" style="padding:0;">
        <table role="presentation"
          style="width:100%;max-width:640px;border-collapse:collapse;border-spacing:0;text-align:left;background:#f9f8fa;">
          <tr>
            <td style="padding:4%;">
              <!--Header-->
              <table role="presentation" style="width:100%;border-collapse:collapse;border-spacing:0;text-align:left;">
                <tr>
                  <td style="padding:0">
                    <table role="presentation" style="width:100%;border-collapse:collapse;border-spacing:0;">
                      <tr>
                        <td style="padding:0;width:50%;" align="left">
                          <h4>ChatApp</h4>
                        </td>
                        <td style="padding: 0; width: 50%" align="right">
                          <a
                            href="#">
                            <img src="https://common-boletia-admin-v2.s3.amazonaws.com/cognito/twitter.png"
                              alt="Not Found" class="social-icon" width="20" height="20" />
                          </a>
                          <a
                            href="#">
                            <img src="https://common-boletia-admin-v2.s3.amazonaws.com/cognito/facebook.png"
                              alt="Not Found" class="social-icon" width="20" height="20" style="margin-left: 12px" />
                          </a>
                          <a
                            href="#">
                            <img src="https://common-boletia-admin-v2.s3.amazonaws.com/cognito/instagram.png"
                              alt="Not Found" class="social-icon" width="20" height="20" style="margin-left: 12px" />
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- Spacer 25px-->
                <tr>
                  <td style="padding:13px 0;"></td>
                </tr>
                <!-- Main content-->
                <tr style="border-radius:10px">
                  <td style="background:#ffffff;border-radius:10px;padding:24px 4%;">
                    <table>
                      <tr>
                        <td>
                          <h5 style="font-weight: 700;font-size: 20px;line-height: 150%;">
                            Bienvenido a chat App
                          </h5>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p
                            style="font-weight:400;font-size: 16px;line-height: 150%;letter-spacing: 0.2px;color: #333333;">
                            Hola <b>${firstname} ${lastname}</b>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p
                            style="font-weight:400;font-size: 16px;line-height: 150%;letter-spacing: 0.2px;color: #333333;">
                            Gracias por registrarte a chatApp para vivir la experiencia de mensajeria.
                            Te invitamos a que generes tu primer conversación y disfrutes de esta plataforma.
                            Esperemos que sea de tu agrado.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p
                            style="font-weight:400;font-size: 16px;line-height: 150%;letter-spacing: 0.2px;color: #333333;">
                          <p>Atentamente, <br />Equipo chat App</p>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:15.5px 0;">
                      </tr>
                      <tr>
                        <td>
                          <table style="width:100%">
                            <tr>
                              <td
                                style="width:60%;text-align:center;background:#ed6b2c;padding:15px 20px 15px 20px;border-radius:12px;">
                                <a href="#"
                                  style="text-decoration: none;color:#ffffff;font-weight: 600;font-size: 18px;">Ir a
                                  chatApp</a>
                              </td>
                              <td style="width:30%;">
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!--Spacer -->
                <tr>
                  <td style="padding:16px 0;"></td>
                </tr>
                <!-- Footer -->
                <tr>
                  <td>
                    <p>
                      Te esperamos
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      Comentarios y/o sugerencias puedes
                      escribirnos a través de nuestras redes sociales.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>

</html>`;

module.exports = welcomeTemplate;
