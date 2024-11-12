/*
Create a public class called Cube without a constructor which gets one single private integer variable Side, a getter GetSide() and a setter SetSide(int num) method for this property. Actually, getter and setter methods are not the common way to write this code in C#. In the next kata of this series, we gonna refactor the code and make it a bit more professional...

Notes:

There's no need to check for negative values!
initialise the side to 0.
*/

// Where is my cube ?
class Cube
{
private:
    int Side = 0;

public:
    int GetSide();
    void SetSide(int);
};

int Cube::GetSide()
{
    return this->Side;
}

void Cube::SetSide(int n)
{
    this->Side = n;
}