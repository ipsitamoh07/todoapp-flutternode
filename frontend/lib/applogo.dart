import 'package:flutter/material.dart';
import 'package:velocity_x/velocity_x.dart';

class CommonLogo extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        Image.network(
          "https://w7.pngwing.com/pngs/648/7/png-transparent-logo-comcast-business-advertising-organization-business-blue-angle-company-thumbnail.png",
          width: 50,
          errorBuilder: (BuildContext context, Object exception, StackTrace? stackTrace) {
            return Icon(
              Icons.error,
              size: 50,
              color: Colors.red,
            );
          },
        ),
        "To-Do App".text.xl2.italic.make(),
        "Make A List of your task".text.light.white.wider.lg.make(),
      ],
    );
  }
}

void main() {
  runApp(MaterialApp(
    home: Scaffold(
      backgroundColor: Colors.black, // Set the background color if the text is white
      body: Center(
        child: CommonLogo(),
      ),
    ),
  ));
}
