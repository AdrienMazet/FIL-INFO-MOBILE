import 'package:flutter/material.dart';

void main() => runApp(const MonApplication());

class BoutonContactezMoi extends StatelessWidget {
  const BoutonContactezMoi({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: () => showDialog(
          context: context,
          builder: (BuildContext context) {
            return const AlertDialog(
              title: Text('Contactez-moi'),
              content: Text('Je suis joignable à l\'IMT Atlantique'),
            );
          }),
      style: ElevatedButton.styleFrom(primary: const Color(0xFFB74093)),
      child: const Text('Contactez-moi!'),
    );
  }
}

class MonApplication extends StatelessWidget {
  const MonApplication({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
          appBar: AppBar(
            title: const Text('Bonjour App'),
            backgroundColor: const Color(0xFFB74093),
          ),
          body: SingleChildScrollView(
              child: Center(
                  child: Column(
            children: [
              const Text('Bonjour',
                  style: TextStyle(
                      fontSize: 40,
                      fontWeight: FontWeight.bold,
                      color: Color(0xFFB74093))),
              const Text('Je suis Flutter',
                  style: TextStyle(fontSize: 30, color: Color(0xFFB74093))),
              Image.network(
                'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-goog/events/flutter_I6JGxZE.jpg',
                height: 350,
              ),
              const BoutonContactezMoi()
            ],
          )))),
    );
  }
}
